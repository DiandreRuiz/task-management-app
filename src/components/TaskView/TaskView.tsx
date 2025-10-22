import React from "react";
import { useParams } from "react-router-dom";
import { useTasks } from "../../contexts/TaskContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from "../../styles/TaskView.module.css";

// All tasks mapped into slots that have dropdowns
// Open tasks page we just see dropdowns
// Open from specific task in TaskFeed that one is opened

const TaskView: React.FC = () => {
    const { tasks } = useTasks();
    const params = useParams();
    const focusedTaskName = params.taskName;
    console.log(focusedTaskName);

    return (
        <Container className="mt-5">
            <Row>
                {tasks.map((t) => (
                    <Col key={t.name} xs={12} md={4}>
                        <Card className={focusedTaskName && t.name === focusedTaskName ? styles.focusedAnimation : ""}>
                            <Card.Header>{t.name}</Card.Header>
                            <Card.Body>{t.description}</Card.Body>
                            <Card.Footer style={{ backgroundColor: t.taskColor ? t.taskColor : undefined }}>
                                Group: <b>{t.taskGroup}</b>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TaskView;
