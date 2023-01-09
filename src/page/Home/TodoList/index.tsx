import styled from '@emotion/styled';
import { faker } from '@faker-js/faker/locale/ko';
import { Link } from 'react-router-dom';
import useTodoStore from 'src/store/useTodoStore';
import TodoTable from './TodoTable';

const createTodoMock = () => {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    id: faker.datatype.uuid(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
};

const TodoList = () => {
  const [todos, addTodo, removeTodoById] = useTodoStore((state) => [state.todos, state.addTodo, state.removeTodoById]);

  const onClickAddItem = () => {
    addTodo(createTodoMock());
  };

  const onClickRemoveItem = (id: string) => {
    removeTodoById(id);
  };

  return (
    <>
      <h1>To-do List</h1>
      <button onClick={onClickAddItem} type="button">
        추가
      </button>
      <TodoTable>
        {todos.map((todo) => {
          return (
            <TodoWrap key={todo.id}>
              <TodoTitle to={`/${todo.id}`}>{todo.title}</TodoTitle>
              <button type="button" onClick={() => onClickRemoveItem(todo.id)}>
                삭제
              </button>
            </TodoWrap>
          );
        })}
      </TodoTable>
    </>
  );
};

const TodoWrap = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 50px',
  gap: '16px',
});

const TodoTitle = styled(Link)({
  // 한줄만 보이게
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export default TodoList;
