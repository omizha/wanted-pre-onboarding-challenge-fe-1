import { useCallback, useRef } from 'react';

const usePassword = (setValidPassword: React.Dispatch<React.SetStateAction<boolean>>) => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const isValid = useCallback((password: string) => {
    const isMinLength = password.length >= 8;
    return isMinLength;
  }, []);

  const onInputPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValidPassword(isValid(event.currentTarget.textContent ?? ''));
  }, []);

  return { passwordRef, onInputPassword };
};

export default usePassword;
