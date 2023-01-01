import styled from '@emotion/styled';
import { Container } from 'src/component';
import { faker } from '@faker-js/faker/locale/ko';
import TodoTable from './TodoTable';

const Todos = Array.from({ length: 50 }).map(() => {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.sentence(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    deletedAt: undefined,
    content: faker.lorem.paragraph(),
    isDone: faker.datatype.boolean(),
  };
});

const Home = () => {
  return (
    <Container>
      <h1>To-do List</h1>
      <button type="button">추가</button>
      <TodoTable>
        {Todos.map((todo) => {
          return (
            <TodoWrap key={todo.id}>
              <TodoTitle>{todo.title}</TodoTitle>
              <input type="checkbox" checked={todo.isDone} />
              <button type="button">삭제</button>
            </TodoWrap>
          );
        })}
      </TodoTable>
    </Container>
  );
};

const TodoWrap = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 50px 50px',
  gap: '16px',
});

const TodoTitle = styled.h2({
  // 한줄만 보이게
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export default Home;
