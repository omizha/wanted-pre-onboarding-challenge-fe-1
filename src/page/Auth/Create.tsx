import { useState } from 'react';
import { Container } from 'src/component';
import useEmail from './hook/useEmail';
import usePassword from './hook/usePassword';

const Create = () => {
  const [isValidEmail, setValidEmail] = useState(false);
  const [isValidPassword, setValidPassword] = useState(false);

  const { emailRef, onInputEmail } = useEmail(setValidEmail);
  const { passwordRef, onInputPassword } = usePassword(setValidPassword);

  return (
    <Container>
      <h1>Sign Up</h1>
      <input ref={emailRef} onInput={onInputEmail} type="text" placeholder="이메일" />
      <input ref={passwordRef} onInput={onInputPassword} type="password" placeholder="비밀번호" />
      <button type="submit">제출</button>
    </Container>
  );
};

export default Create;
