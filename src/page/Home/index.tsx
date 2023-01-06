import React from 'react';
import styled from '@emotion/styled';
import { Container } from 'src/component';
import { faker } from '@faker-js/faker/locale/ko';
import TodoTable from './TodoTable';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';
import { Store } from 'src/store';
import { Link } from 'react-router-dom';

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
  const todos = useRecoilValue(Store.todos);

  const onClickAddItem = useRecoilCallback(
    ({ set }) =>
      () => {
        set(Store.todos, (prev) => [...prev, createTodoMock()]);
      },
    [],
  );

  const onClickRemoveItem = useRecoilCallback(
    ({ set }) =>
      (id: string) => {
        set(Store.todos, (prev) => prev.filter((todo) => todo.id !== id));
      },
    [],
  );

  return (
    <Container>
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
    </Container>
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

export default Home;
