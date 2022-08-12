import React, { useCallback } from "react";
import styled from "@emotion/styled/macro";
import { useMemo } from "react";
import useTodoStore from "../../features/todo/useTodoStore";
import { isSameDay } from "../../utils";
import TodoList from "../../features/todo/TodoList";

const TableData = styled.td`
    text-align: center;
    color: #c9c8cc;
    padding: 8px;
    position: relative;
`;

const DisplayDate = styled.div<{ isToday?: boolean; isSelected?: boolean }>`
    color: ${({ isToday }) => isToday && "#F8f7fa"};
    background-color: ${({ isToday, isSelected }) =>
        isSelected ? "#7047eb" : isToday ? "#313133" : ""};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    align-self: flex-end;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 36px;
    height: 36px;
    cursor: pointer;
`;

const Container = styled.div``;

////////////////////////////////////////////////////////////////////

interface CalendarDayProps {
    date: Date;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date }) => {
    const {
        selectedDate,
        getFilteredTodoList,
        setSelectedDate,
        setOpenTodoFormModal,
        setOpenTodoStatisticsModal,
    } = useTodoStore((state) => ({
        selectedDate: state.selectedDate,
        getFilteredTodoList: state.getFilteredTodoList,
        setSelectedDate: state.setSelectedDate,
        setOpenTodoFormModal: state.setIsOpenTodoFormModal,
        setOpenTodoStatisticsModal: state.setIsOpenTodoStatisticsModal,
    }));

    const today = useMemo(() => new Date(), []);

    const filteredTodoList = useMemo(
        () => getFilteredTodoList(date),
        [date, getFilteredTodoList]
    );

    const handleOpenTodoFormModal = useCallback(
        (d: number) => {
            setSelectedDate(new Date(selectedDate.setDate(d)));
            setOpenTodoFormModal(true);
        },
        [selectedDate, setSelectedDate, setOpenTodoFormModal]
    );

    const handleSelectDate = useCallback(
        (d: number) => {
            setSelectedDate(new Date(selectedDate.setDate(d)));
        },
        [selectedDate, setSelectedDate]
    );

    const handleOpenTodoStatisticsModal = useCallback(
        (e: React.SyntheticEvent<HTMLDivElement>) => {
            e.stopPropagation();
            setOpenTodoStatisticsModal(true);
        },
        [setOpenTodoStatisticsModal]
    );

    return (
        <TableData
            onDoubleClick={() => handleOpenTodoFormModal(date.getDate())}
        >
            <Container>
                <DisplayDate
                    isSelected={isSameDay(selectedDate, date)}
                    isToday={isSameDay(today, date)}
                    onClick={() => handleSelectDate(date.getDate())}
                    onDoubleClick={handleOpenTodoStatisticsModal}
                >
                    {date.getDate()}
                </DisplayDate>
                <TodoList items={filteredTodoList} />
            </Container>
        </TableData>
    );
};

export default CalendarDay;
