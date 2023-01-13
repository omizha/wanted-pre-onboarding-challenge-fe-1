import { useCallback, useRef } from 'react';

const useEmail = (setValidEmail: React.Dispatch<React.SetStateAction<boolean>>) => {
  const emailRef = useRef<HTMLInputElement>(null);

  const isValid = useCallback((email: string) => {
    const isIncludeAt = email.includes('@');
    const isIncludeDot = email.includes('.');

    return isIncludeAt && isIncludeDot;
  }, []);

  const onInputEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValidEmail(isValid(event.currentTarget.textContent ?? ''));
  }, []);

  return { emailRef, onInputEmail };
};

export default useEmail;
