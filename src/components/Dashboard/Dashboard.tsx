import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TaskFeed from "./TaskFeed/TaskFeed";
import AddTaskForm from "./AddTaskForm";
import UserDetails from "./UserDetails";
const Dashboard: React.FC = () => {
    // Simulate grabbing tasks from backend

    return (
        <>
            <Container>
                <Row className="justify-content-center mt-4 mb-2">
                    <Col xs={12} md={6} className="w-auto">
                        <h1>User Dashboard</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="bg-light text-center col-2 p-3">
                        <UserDetails />
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Col xs={12} md={6} className="w-auto">
                        <h3>Add Task</h3>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Col xs={12} md={6} className="bg-light p-3 rounded-3">
                        <AddTaskForm />
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Col xs={12} md={6} className="w-auto">
                        <h3>Task Feed</h3>
                    </Col>
                </Row>
                <Row>
                    <TaskFeed />
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;
