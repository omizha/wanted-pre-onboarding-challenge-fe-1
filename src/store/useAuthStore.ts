import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface AuthState {
  email: string;
  password: string;
}

const useTodoStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        password: '',
        email: '',
      }),
      {
        name: 'Todo-Store',
      },
    ),
    {},
  ),
);

export default useTodoStore;
