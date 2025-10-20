import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import type { Todo } from "../TaskList";

type UserTaskListType = {
    tasks: Todo[];
};

const TaskFeed: React.FC<UserTaskListType> = ({ tasks }) => {
    return (
        <Container>
            {tasks.map((t) => (
                <Row>
                    <p>
                        task: {t.task} | t-list: {t.taskList ? t.taskList : "none"} | completed: {t.completed ? "✅" : "❌"} <Button /> <Button /> <Button />
                    </p>
                </Row>
            ))}
        </Container>
    );
};

export default TaskFeed;
