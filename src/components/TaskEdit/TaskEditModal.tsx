import React from "react";
import Modal from "react-bootstrap/Modal";
import TaskEditForm from "./TaskEditForm";
import type { Task } from "../../contexts/TaskContext";

type TaskEditModalProps = {
    show: boolean;
    onHide: () => void;
    task: Task | null;
};

const TaskEditModal: React.FC<TaskEditModalProps> = ({ show, onHide, task }) => {
    if (!task) return null; // Don't render if no task selected

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Task: {task.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TaskEditForm owner={task.owner} name={task.name} description={task.description} completed={task.completed} taskGroup={task.taskGroup} taskColor={task.taskColor} onSave={onHide} />
            </Modal.Body>
            <Modal.Footer>{/* No close button - user can use the X in the header */}</Modal.Footer>
        </Modal>
    );
};

export default TaskEditModal;
