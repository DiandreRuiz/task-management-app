import React from "react";
import Button from "react-bootstrap/Button";

const TaskButtons: React.FC<TaskButtonHandlers> = ({ onView, onEdit, onDelete }) => {
    return (
        <>
            <Button onClick={onView} />
            <Button onClick={onEdit} />
            <Button onClick={onDelete} />
        </>
    );
};

export default TaskButtons