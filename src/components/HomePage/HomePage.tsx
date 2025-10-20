import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TaskFeed from "./TaskFeed/TaskFeed";
import TaskList from "../TaskList";
import type { Todo } from "../TaskList";

const HomePage: React.FC = () => {
    // Simulate grabbing tasks from backend
    const tasks: Todo[] = [
        { id: 0, task: "take out trash", taskList: null, completed: false },
        { id: 1, task: "take out dog", taskList: null, completed: false },
        { id: 2, task: "take out dishses", taskList: null, completed: false },
    ];

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6} className="w-auto">
                    <h1>Dashboard</h1>
                </Col>
            </Row>
            <Row className="bg-success">
                <TaskFeed tasks={tasks} />
            </Row>
            <Row>
                <TaskList />
            </Row>
        </Container>
    );
};

export default HomePage;
