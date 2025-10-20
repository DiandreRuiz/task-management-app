import React from "react";
import Button from "react-bootstrap/Button";
import type { Task } from "../../../contexts/TaskContext";

type TaskFeedButtonHandlersProp = {
    onView: () => Task | null;
    onEdit: () => void;
    onDelete: () => void;
};

const TaskButtons: React.FC<TaskFeedButtonHandlersProp> = ({ onView, onEdit, onDelete }) => {
    return (
        <>
            <Button onClick={onView} />
            <Button onClick={onEdit} />
            <Button onClick={onDelete} />
        </>
    );
};

export default TaskButtons;
