import React from "react";
import styled from "@emotion/styled/macro";

import useTodoStore, { Todo } from "./useTodoStore";
import { useCallback } from "react";

const TodoItem = styled.li<{ done?: boolean; selected?: boolean }>`
    max-width: 100px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: ${({ done, selected }) =>
        selected
            ? "rgba(112, 71, 235, 1)"
            : done
            ? "transparent"
            : "rgba(112, 71, 235, 0.4)"};
    padding: 2px 4px;
    margin: 0;
    border-radius: 8px;
    font-size: 10px;
    text-decoration: ${({ done }) => done && "line-through"};
    cursor: pointer;
`;

const EtcItem = styled.li`
    padding: 2px 4px;
    margin: 0;
    font-size: 10px;
    cursor: pointer;
`;

const Base = styled.ul`
    list-style: none;
    margin: 36px 0 0 0;
    padding: 0;
    width: 100%;
    height: 60px;
    ${TodoItem} + ${TodoItem} {
        margin-top: 1px;
    }

    ${TodoItem} + ${EtcItem} {
        margin-top: 1px;
    }
`;

////////////////////////////////////////////////////////////////////////////////

interface TodoListProps {
    items: Array<Todo>;
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
    const { selectedTodo, setSelectedTodo, setOpenTodoStatisticsModal } =
        useTodoStore((state) => ({
            selectedTodo: state.selectedTodo,
            setSelectedTodo: state.setSelectedTodo,
            setOpenTodoStatisticsModal: state.setIsOpenTodoStatisticsModal,
        }));

    const handleClick = useCallback(
        (e: React.SyntheticEvent<HTMLLIElement>, todo: Todo) => {
            e.stopPropagation();

            setSelectedTodo(
                selectedTodo?.id === todo.id && selectedTodo.date === todo.date
                    ? null
                    : todo
            );
        },
        [selectedTodo, setSelectedTodo]
    );

    const handleOpenTodoStatisticsModal = useCallback(
        (e: React.SyntheticEvent<HTMLLIElement>) => {
            e.stopPropagation();

            setOpenTodoStatisticsModal(true);
        },
        [setOpenTodoStatisticsModal]
    );

    return (
        <Base>
            {items.slice(0, 3).map((item, index) => (
                <TodoItem
                    key={item.id}
                    done={item.done}
                    onClick={(e) => handleClick(e, item)}
                >
                    {item.content}
                </TodoItem>
            ))}
            {items.length > 3 && (
                <EtcItem onClick={handleOpenTodoStatisticsModal}>
                    {`그 외 ${items.length - 3}`}
                </EtcItem>
            )}
        </Base>
    );
};

export default TodoList;
