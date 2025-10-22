import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTasks } from "../../../contexts/TaskContext";
import { useEditModal } from "../../../hooks/useTaskEditModal";
import TaskButtons from "./TaskButtons";
import TaskEditModal from "../TaskEdit/TaskEditModal";

const TaskFeed: React.FC = () => {
    const { tasks, removeTask } = useTasks();
    const { openModal, closeModal, selectedTask, showModal } = useEditModal();
    const navigate = useNavigate();

    const navigateToTaskViewForSpecificTask = (taskName: string) => {
        navigate(`/tasks/${taskName}`);
    };

    return (
        <Container>
            <TaskEditModal show={showModal} onHide={closeModal} task={selectedTask} />
            {tasks.length === 0 ? (
                <Row className="text-center mt-3">
                    <p className="text-muted">No tasks yet. Add some tasks to get started!</p>
                </Row>
            ) : (
                tasks.map((t) => (
                    <Row key={t.name} className="bg-light p-3 rounded-3 align-items-center justify-content-center">
                        <Col md={"auto"} xs={12}>
                            <p className="mb-0" style={{ backgroundColor: t.taskColor ?? undefined }}>
                                <b>Name:</b> {t.name} <b>Group:</b> {t.taskGroup ? t.taskGroup : "none"} <b>Description:</b> {t.description} <b>Completed:</b> {t.completed ? "✅" : "❌"}{" "}
                            </p>
                        </Col>
                        <Col md={"auto"} xs={12} className="d-flex gap-3 w-auto align-items-center">
                            <TaskButtons onView={() => navigateToTaskViewForSpecificTask(t.name)} onEdit={() => openModal(t)} onDelete={() => removeTask(t.name)} />
                        </Col>
                    </Row>
                ))
            )}
        </Container>
    );
};

export default TaskFeed;
