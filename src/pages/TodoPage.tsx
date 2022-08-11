import React from "react";
import TodoContainer from "../containers/TodoContainer";
import TodoFormModal from "../features/todo/TodoFormModal";
import TodoStatisticsModal from "../features/todo/TodoStatisticsModal";

export default function TodoPage() {
    return (
        <>
            <TodoContainer />
            <TodoFormModal />
            <TodoStatisticsModal />
        </>
    );
}
