import React from "react";
import { useParams } from "react-router-dom";
import { useTasks } from "../../contexts/TaskContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../../styles/TaskView.module.css";
import TaskEditModal from "../Dashboard/TaskEdit/TaskEditModal";
import { useEditModal } from "../../hooks/useTaskEditModal";

// All tasks mapped into slots that have dropdowns
// Open tasks page we just see dropdowns
// Open from specific task in TaskFeed that one is opened

const TaskView: React.FC = () => {
    const { tasks } = useTasks();
    // We create a new instantiation of the useEditModal hook which we will use to manage the
    // state of this specific Modal component
    const { openModal, closeModal, selectedTask, showModal } = useEditModal();
    const params = useParams();
    const focusedTaskName = params.taskName;
    const numTasks = tasks.length;

    return (
        <Container className="mt-5">
            <TaskEditModal show={showModal} task={selectedTask} onHide={closeModal}></TaskEditModal>
            {numTasks ? (
                <Row>
                    {tasks.map((t) => (
                        <Col key={t.name} xs={12} md={3}>
                            <Card className={focusedTaskName && t.name === focusedTaskName ? styles.focusedAnimation : ""}>
                                <Card.Header className="text-center">
                                    <b>{t.name}</b>
                                </Card.Header>
                                <Card.Footer style={{ backgroundColor: t.taskColor ? t.taskColor : undefined }}>
                                    <b>Group: </b>
                                    {t.taskGroup}
                                </Card.Footer>
                                <Card.Body>
                                    <b>Description: </b>
                                    {t.description}
                                    <br />
                                    <br />
                                    <b>Completed: </b>
                                    {t.completed ? "✅" : "❌"}
                                    <br />
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <Button className="w-50 m-2 mx-auto" onClick={() => openModal(t)}>
                                        Edit
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <>
                    <Row>
                        <Col className="text-primary text-center">
                            <h2>You have no Tasks!</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-secondary text-center">
                            <h2>Try making some in the Dashboard.</h2>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
};

export default TaskView;
