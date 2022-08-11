import React, { useEffect } from "react";
import Todo from "../components/Todo";
import { useTokenStore } from "../features/auth/useTokenStore";

interface TodoContainerProps {}

const TodoContainer: React.FC<TodoContainerProps> = (props) => {
    const { isValidToken } = useTokenStore();

    useEffect(() => {
        if (!isValidToken()) {
            window.location.href = "/auth";
        }
    }, [isValidToken]);

    return <Todo />;
};

export default TodoContainer;
