import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TaskFeed from "./TaskFeed/TaskFeed";
const HomePage: React.FC = () => {
    // Simulate grabbing tasks from backend

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6} className="w-auto">
                    <h1>Dashboard</h1>
                </Col>
            </Row>
            <Row className="bg-success">
                <TaskFeed />
            </Row>
        </Container>
    );
};

export default HomePage;
