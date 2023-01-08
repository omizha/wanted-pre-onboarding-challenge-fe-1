import { Todo } from 'src/types';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodoById: (id: Todo['id']) => void;
}

const useTodoStore = create<TodoState>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
        removeTodoById: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
      }),
      {
        name: 'Todo-Store',
      },
    ),
    {},
  ),
);

export default useTodoStore;
