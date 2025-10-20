import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTasks } from "../../contexts/TaskContext";
const AddTaskForm: React.FC = () => {
    const { addTask } = useTasks();
    const [taskName, setTaskName] = useState<string>("");
    const [taskDescription, setTaskDescription] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (taskName.trim() === "" || taskDescription.trim() === "") {
            return;
        }
        addTask({ name: taskName, description: taskDescription, completed: false, taskGroup: null, owner: null });
        setTaskName("");
        setTaskDescription("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="taskName">
                <Form.Label>Task Name</Form.Label>
                <Form.Control type="text" placeholder="Enter task name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskDescription">
                <Form.Label>Task Description</Form.Label>
                <Form.Control type="text" placeholder="Enter task description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
                Add Task
            </Button>
        </Form>
    );
};

export default AddTaskForm;