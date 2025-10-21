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
            <Button onClick={onView}>View</Button>
            <Button onClick={onEdit}>Edit</Button>
            <Button onClick={onDelete}>Delete</Button>
        </>
    );
};

export default TaskButtons;
