import { atom } from 'recoil';
import { Todo } from 'src/types';

export const todos = atom<Todo[]>({ default: [], key: 'todos' });
