import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Container } from 'src/component';
import { Store } from 'src/store';

const TodoDetail = () => {
  const { id } = useParams();
  const todos = useRecoilValue(Store.todos);
  const todo = todos.find((todo) => todo.id === id);

  return (
    <Container>
      <h1>{todo?.title}</h1>
      <p>{todo?.content}</p>
    </Container>
  );
};

export default TodoDetail;
