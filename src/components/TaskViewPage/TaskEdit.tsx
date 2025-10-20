import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import type { Task } from "../../contexts/TaskContext";

const TaskViewPage: React.FC<Task> = ({ name, description, completed, taskGroup }) => {
    const [taskName, setTaskName] = useState(name);
    const [taskDescription, setTaskDescription] = useState(description);
    const [taskCompleted, setTaskCompleted] = useState(completed);
    const [taskGroupState, setTaskGroupState] = useState(taskGroup ? taskGroup : "");

    // Task Group will need specific checks for dirty checking!
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="taskName">
                <Form.Label>Task Name</Form.Label>
                <Form.Control type="text" placeholder={name} value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskDescription">
                <Form.Label>Task Description</Form.Label>
                <Form.Control type="text" placeholder={description} value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskCompleted">
                <Form.Label>Task Complete</Form.Label>
                <Form.Check checked={taskCompleted} onChange={(e) => setTaskCompleted(e.target.checked)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskGroup">
                <Form.Label>Task Group</Form.Label>
                <Form.Control type="text" placeholder={taskGroup ? taskGroup : ""} value={taskGroupState} onChange={(e) => setTaskGroupState(e.target.value)} />
            </Form.Group>
            <Button type="submit">Save</Button>
        </Form>
    );
};
