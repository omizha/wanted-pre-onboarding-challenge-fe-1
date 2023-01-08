import React from 'react';
import styled from '@emotion/styled';
import { Container } from 'src/component';
import { faker } from '@faker-js/faker/locale/ko';
import TodoTable from './TodoTable';
import { Link } from 'react-router-dom';
import TodoDetail from './TodoDetail';
import useTodoStore from 'src/store/useTodoStore';

const createTodoMock = () => {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    id: faker.datatype.uuid(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
};

const Home = () => {
  const [todos, addTodo, removeTodoById] = useTodoStore((state) => [state.todos, state.addTodo, state.removeTodoById]);

  const onClickAddItem = () => {
    addTodo(createTodoMock());
  };

  const onClickRemoveItem = (id: string) => {
    removeTodoById(id);
  };

  return (
    <Container>
      <Grid>
        <Row>
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
        </Row>
        <Row>
          <TodoDetail />
        </Row>
      </Grid>
    </Container>
  );
};

const Grid = styled.div({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
});

const Row = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '100%',
  height: '100%',
});

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

export default Home;
