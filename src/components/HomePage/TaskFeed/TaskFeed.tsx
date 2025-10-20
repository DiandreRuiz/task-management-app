import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useTasks } from "../../../contexts/TaskContext";
import TaskButtons from "./TaskButtons";

const TaskFeed: React.FC = () => {
    const { tasks, updateTask, removeTask, viewTask } = useTasks();
    
    return (
        <Container>
            {tasks.map((t) => (
                <Row>
                    <p>
                        Name: {t.name} | Group: {t.taskGroup ? t.taskGroup : "none"} | Description: {t.description} | completed: {t.completed ? "✅" : "❌"}
                        <TaskButtons
                            onView={() => viewTask(t.name)}
                            onEdit={() => updateTask(t.name, { description: "new description" })}
                            onDelete={() => removeTask(t.name)}
                        />
                    </p>
                </Row>
            ))}
        </Container>
    );
};

export default TaskFeed;
