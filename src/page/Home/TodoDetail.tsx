import { useParams } from 'react-router-dom';
import useTodoStore from 'src/store/useTodoStore';

const TodoDetail = () => {
  const { id } = useParams();
  const todos = useTodoStore((state) => state.todos);
  const todo = todos.find((todo) => todo.id === id);

  return (
    <>
      <h1>{todo?.title}</h1>
      <p>{todo?.content}</p>
    </>
  );
};

export default TodoDetail;
