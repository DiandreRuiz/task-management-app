import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useTasks } from "../../../contexts/TaskContext";

const TaskFeed: React.FC = () => {
    const { tasks } = useTasks();
    
    return (
        <Container>
            {tasks.map((t) => (
                <Row>
                    <p>
                        Name: {t.name} | Group: {t.taskGroup ? t.taskGroup : "none"} | Description: {t.description} | completed: {t.completed ? "✅" : "❌"}
                    </p>
                </Row>
            ))}
        </Container>
    );
};

export default TaskFeed;
