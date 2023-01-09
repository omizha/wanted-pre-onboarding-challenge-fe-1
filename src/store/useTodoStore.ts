import { Todo } from 'src/types';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodoById: (id: Todo['id']) => void;
  modifyTodo: (todo: Todo) => void;
}

const useTodoStore = create<TodoState>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
        removeTodoById: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
        modifyTodo: (todo) =>
          set((state) => {
            const todos = [...state.todos];
            const currentTodo = todos.find(({ id }) => id === todo.id);
            if (currentTodo) {
              currentTodo.updatedAt = new Date();
              currentTodo.title = todo.title;
              currentTodo.content = todo.content;
            }
            return { todos };
          }),
      }),
      {
        name: 'Todo-Store',
      },
    ),
    {},
  ),
);

export default useTodoStore;
