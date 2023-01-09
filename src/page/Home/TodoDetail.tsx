import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTodoStore from 'src/store/useTodoStore';
import { Todo } from 'src/types';

const TodoDetail = () => {
  const { id } = useParams();
  const [modifyTodo] = useTodoStore((state) => [state.modifyTodo]);
  const todo = useRef<Todo>();

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    todo.current = useTodoStore.getState().todos.find((todo) => todo.id === id);
  }, []);

  useEffect(() => {
    setEditable(false);
  }, [id]);

  const onClick = () => {
    setEditable(true);
  };

  const onInputTitle = (event: React.FormEvent<HTMLElement>) => {
    if (!todo.current) return;

    const { textContent } = event.currentTarget;
    modifyTodo({ ...todo.current, title: textContent ?? '' });
  };

  const onInputContent = (event: React.FormEvent<HTMLElement>) => {
    if (!todo.current) return;

    const { textContent } = event.currentTarget;
    modifyTodo({ ...todo.current, content: textContent ?? '' });
  };

  return (
    <Wrap>
      <div>
        <h2 contentEditable={editable} onInput={onInputTitle}>
          {todo.current?.title}
        </h2>
        <p contentEditable={editable} onInput={onInputContent}>
          {todo.current?.content}
        </p>
      </div>
      <button onClick={onClick} disabled={editable}>
        수정
      </button>
    </Wrap>
  );
};

const Wrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
});

export default TodoDetail;
