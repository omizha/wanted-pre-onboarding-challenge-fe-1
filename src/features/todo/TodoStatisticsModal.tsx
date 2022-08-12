import React, { useCallback } from "react";
import styled from "@emotion/styled/macro";
import { HiOutlineTrash } from "react-icons/hi";

import Modal from "../../components/Todo/Modal";
import useTodoStore, { Todo } from "./useTodoStore";

const ModalBody = styled.div`
    width: 100vw;
    max-width: 386px;
    padding: 8px;
`;

const Date = styled.small`
    display: block;
    color: #c9c8cc;
`;

const TodoActionButton = styled.button<{ secondary?: boolean }>`
    border: none;
    background-color: transparent;
    color: ${({ secondary }) => secondary && "#ff6b6b"};
    cursor: pointer;
`;

const TodoActions = styled.span`
    flex: 1 0 5%;
`;

const Content = styled.span`
    flex: 1 0 95%;
`;

const TodoItem = styled.li`
    width: 100%;
    display: flex;
    color: #c9c8cc;
    align-items: center;
    border-radius: 8px;
`;

const TodoList = styled.ul`
    list-style: circle;
    margin: 0;
    padding: 0;
    width: 100%;
    ${TodoItem} + ${TodoItem} {
        margin-top: 8px;
    }
`;

const Statistics = styled.p`
    color: #7047eb;
    font-size: 16px;
    font-weight: bold;
`;

const Card = styled.div`
    width: 100%;
    max-width: 370px;
    border-radius: 16px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    padding: 24px;
    box-sizing: border-box;
    background-color: #19181a;
    ${Date} + ${TodoList} {
        margin-top: 24px;
    }
`;

/////////////////////////////////////////////////////////////////////////

interface TodoStatisticsModalProps {}

const TodoStatisticsModal: React.FC<TodoStatisticsModalProps> = () => {
    const {
        selectedDate,
        isOpen,
        getFilteredTodoList,
        getStatistics,
        setIsOpen,
        removeTodo,
    } = useTodoStore((state) => ({
        selectedDate: state.selectedDate,
        isOpen: state.isOpenTodoStatisticsModal,
        getFilteredTodoList: state.getFilteredTodoList,
        getStatistics: state.getTodoStatistics,
        setIsOpen: state.setIsOpenTodoStatisticsModal,
        removeTodo: state.removeTodo,
    }));

    const statistics = getStatistics(selectedDate);
    const filteredTodoList = getFilteredTodoList(selectedDate);

    const handleRemoveTodo = useCallback(
        (todo: Todo) => {
            removeTodo(todo.id);
        },
        [removeTodo]
    );

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalBody>
                <Card>
                    <Date>2021-09-12</Date>
                    <Statistics>
                        할 일 {statistics.total - statistics.done}개 남음
                    </Statistics>
                    <TodoList>
                        {filteredTodoList?.map((todo) => (
                            <TodoItem key={todo.id}>
                                <Content>{todo.content}</Content>
                                <TodoActions>
                                    <TodoActionButton
                                        secondary
                                        onClick={() => handleRemoveTodo(todo)}
                                    >
                                        <HiOutlineTrash />
                                    </TodoActionButton>
                                </TodoActions>
                            </TodoItem>
                        ))}
                    </TodoList>
                </Card>
            </ModalBody>
        </Modal>
    );
};

export default TodoStatisticsModal;
