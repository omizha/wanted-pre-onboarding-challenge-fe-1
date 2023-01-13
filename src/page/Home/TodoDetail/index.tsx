import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTodoStore from 'src/store/useTodoStore';

const TodoDetail = () => {
  const { id } = useParams();
  const modifyTodo = useTodoStore((state) => state.modifyTodo);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const [todo] = useState(useTodoStore.getState().todos.find((todo) => todo.id === id));
  const [editable, setEditable] = useState(false);

  const onClickModifyMode = () => {
    setEditable(true);
  };

  const onSubmit = () => {
    if (!todo) return;
    if (!titleRef.current?.textContent) return;
    if (!contentRef.current?.textContent) return;

    modifyTodo({ ...todo, title: titleRef.current.textContent, content: contentRef.current.textContent });
    setEditable(false);
  };

  return (
    <Wrap>
      <div>
        <h2 ref={titleRef} contentEditable={editable}>
          {todo?.title}
        </h2>
        <p ref={contentRef} contentEditable={editable}>
          {todo?.content}
        </p>
      </div>
      {editable ? <button onClick={onSubmit}>제출</button> : <button onClick={onClickModifyMode}>수정</button>}
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
