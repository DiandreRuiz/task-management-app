import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useTasks } from "../../../contexts/TaskContext";
import TaskButtons from "./TaskButtons";

const TaskFeed: React.FC = () => {
    const { tasks, updateTask, removeTask, viewTask } = useTasks();

    return (
        <Container>
            <Row className="text-center">
                {tasks.length === 0 ? (
                    <p className="text-muted">No tasks yet. Add some tasks to get started!</p>
                ) : (
                    tasks.map((t) => (
                        <Row key={t.name} className="bg-light p-3 rounded-3">
                            <p>
                                Name: {t.name} | Group: {t.taskGroup ? t.taskGroup : "none"} | Description: {t.description} | completed: {t.completed ? "✅" : "❌"}
                                <TaskButtons onView={() => viewTask(t.name)} onEdit={() => updateTask(t.name, { description: "new description" })} onDelete={() => removeTask(t.name)} />
                            </p>
                        </Row>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default TaskFeed;
