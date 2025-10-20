import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTasks } from "../../../contexts/TaskContext";
import TaskButtons from "./TaskButtons";

const TaskFeed: React.FC = () => {
    const { tasks, removeTask, viewTask } = useTasks();

    return (
        <Container>
            {tasks.length === 0 ? (
                <Row className="text-center mt-3">
                    <p className="text-muted">No tasks yet. Add some tasks to get started!</p>
                </Row>
            ) : (
                tasks.map((t) => (
                    <Row key={t.name} className="bg-light p-3 rounded-3 align-items-center justify-content-center">
                        <Col md={"auto"} xs={12}>
                            <p className="mb-0">
                                Name: {t.name} | Group: {t.taskGroup ? t.taskGroup : "none"} | Description: {t.description} | completed: {t.completed ? "✅" : "❌"}
                            </p>
                        </Col>
                        <Col md={"auto"} xs={12} className="d-flex gap-3 w-auto align-items-center">
                            <TaskButtons onView={() => viewTask(t.name)} onEdit={() => openEditModal(t.name)} onDelete={() => removeTask(t.name)} />
                        </Col>
                    </Row>
                ))
            )}
        </Container>
    );
};

export default TaskFeed;
