import { Container } from 'src/component';

const Auth = () => {
  return (
    <Container>
      <h1>Login</h1>
      <input type="text" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <button type="submit">로그인</button>
      <button type="button">계정생성</button>
    </Container>
  );
};

export default Auth;
