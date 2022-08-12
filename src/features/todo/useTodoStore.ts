import create from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import { isSameDay } from "../../utils";

export interface Todo {
    id: string;
    content: string;
    done: boolean;
    date: Date;
}

interface TodoState {
    todoList: Array<Todo>;
    addTodo: (newTodo: Todo) => void;
    removeTodo: (id: string) => void;
    getFilteredTodoList: (date: Date) => Array<Todo>;
    getTodoStatistics: (date: Date) => { total: number; done: number };
    selectedDate: Date;
    selectedTodo: Todo | null;
    setSelectedDate: (date: Date) => void;
    setSelectedTodo: (todo: Todo | null) => void;
    isOpenTodoFormModal: boolean;
    isOpenTodoStatisticsModal: boolean;
    setIsOpenTodoFormModal: (isOpen: boolean) => void;
    setIsOpenTodoStatisticsModal: (isOpen: boolean) => void;
}

const useTodoStore = create<TodoState>()(
    devtools(
        subscribeWithSelector((set, get) => ({
            todoList: [],
            addTodo: (newTodo) => {
                const todoList = get().todoList;
                set({ todoList: [...todoList, newTodo] }, false, "addTodo");
            },
            removeTodo: (id) => {
                const todoList = get().todoList;
                set(
                    { todoList: todoList.filter((todo) => todo.id !== id) },
                    false,
                    "removeTodo"
                );
            },
            getFilteredTodoList: (date) => {
                return get().todoList.filter((todo) =>
                    isSameDay(todo.date, date)
                );
            },
            getTodoStatistics: (date) => {
                const filteredTodoList = get().getFilteredTodoList(date);

                return {
                    total: filteredTodoList.length,
                    done:
                        filteredTodoList.filter((todo) => todo.done).length ||
                        0,
                };
            },
            selectedDate: new Date(),
            selectedTodo: null,
            setSelectedDate: (date) =>
                set({ selectedDate: date }, false, "setSelectedDate"),
            setSelectedTodo: (todo) =>
                set({ selectedTodo: todo }, false, "setSelectedTodo"),
            isOpenTodoFormModal: false,
            isOpenTodoStatisticsModal: false,
            setIsOpenTodoFormModal: (isOpen) =>
                set(
                    { isOpenTodoFormModal: isOpen },
                    false,
                    "setIsOpenTodoFormModal"
                ),
            setIsOpenTodoStatisticsModal: (isOpen) =>
                set(
                    { isOpenTodoStatisticsModal: isOpen },
                    false,
                    "setIsOpenTodoStatisticsModal"
                ),
        })),
        {
            name: "TodoStore",
        }
    )
);

export default useTodoStore;
