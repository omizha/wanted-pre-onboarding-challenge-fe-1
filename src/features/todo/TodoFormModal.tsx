import React, { useState, useCallback } from "react";
import styled from "@emotion/styled/macro";
import { v4 as uuidV4 } from "uuid";

import Modal from "../../components/Todo/Modal";
import useTodoStore from "./useTodoStore";
import { getSimpleDateFormat } from "../../utils";

const ModalBody = styled.div`
    width: 100vw;
    max-width: 386px;
    padding: 8px; ;
`;

const TodoDate = styled.small`
    display: block;
    color: #c9c8cc;
`;

const InputTodo = styled.input`
    padding: 16px 24px;
    border: none;
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    color: #c9c8cc;
    caret-color: #c9c8cc;
`;

const Card = styled.div`
    width: 100%;
    max-width: 370px;
    border-radius: 16px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    padding: 24px;
    box-sizing: border-box;
    background-color: #19181a;
    ${TodoDate} + ${InputTodo} {
        margin-top: 24px;
    }
`;

/////////////////////////////////////////////////////////////////

interface TodoFormModalProps {}

const TodoFormModal: React.FC<TodoFormModalProps> = (props) => {
    const [content, setContent] = useState<string>("");

    const { selectedDate, isOpen, setIsOpen, addTodo } = useTodoStore(
        (state) => ({
            selectedDate: state.selectedDate,
            isOpen: state.isOpenTodoFormModal,
            setIsOpen: state.setIsOpenTodoFormModal,
            addTodo: state.addTodo,
        })
    );

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const resetContent = useCallback(() => {
        setContent("");
    }, [setContent]);

    const writeTodo = useCallback(() => {
        const newTodo = {
            id: uuidV4(),
            content,
            done: false,
            date: new Date(selectedDate),
        };
        addTodo(newTodo);
    }, [content, selectedDate, addTodo]);

    const handleKeyPress = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                writeTodo();
                resetContent();
                handleClose();
            }
        },
        [handleClose, resetContent, writeTodo]
    );

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setContent(e.target.value);
        },
        []
    );

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalBody>
                <Card>
                    <TodoDate>{getSimpleDateFormat(selectedDate)}</TodoDate>
                    <InputTodo
                        placeholder="새로운 이벤트"
                        onKeyPress={handleKeyPress}
                        value={content}
                        onChange={handleChange}
                    />
                </Card>
            </ModalBody>
        </Modal>
    );
};

export default TodoFormModal;
