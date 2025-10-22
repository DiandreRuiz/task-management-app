import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTasks } from "../../contexts/TaskContext";

type ValidationErrorsType = {
    name: string | null;
    description: string | null;
};

const AddTaskForm: React.FC = () => {
    const { tasks, addTask } = useTasks();
    const [taskName, setTaskName] = useState<string>("");
    const [taskDescription, setTaskDescription] = useState<string>("");
    const [taskGroup, setTaskGroup] = useState<string>("");
    const [errorState, setErrorState] = useState<string | null>(null);

    const [validationErrors, setValidationErrors] = useState<ValidationErrorsType>({ name: null, description: null });

    const clearFormFieldsAndValidation = () => {
        setTaskName("");
        setTaskDescription("");
        setTaskGroup("");
        setValidationErrors({ name: null, description: null });
    };

    const validate = (): boolean => {
        const errors: ValidationErrorsType = { name: null, description: null };
        let isValid = true;

        // Check for duplicate task name
        if (tasks.some((t) => t.name === taskName)) {
            errors.name = "Task name already in use";
            isValid = false;
        }
        // Check for empty task name
        else if (!taskName.trim()) {
            errors.name = "Task name is required";
            isValid = false;
        }

        // Check for empty task description
        if (!taskDescription.trim()) {
            errors.description = "Task description is required";
            isValid = false;
        }

        setValidationErrors(errors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            // Validate and block submission if not valid
            if (!validate()) {
                return; // Stop execution if validation fails
            }
            // Task color assignment is handled by task group reconcilation within context
            addTask({
                name: taskName,
                description: taskDescription,
                completed: false,
                taskGroup: taskGroup ? taskGroup : null,
                owner: null,
                taskColor: null,
            });

            clearFormFieldsAndValidation();
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorState(error.message);
            } else {
                setErrorState(String(error));
            }
        }
    };

    return errorState ? (
        <div className="alert alert-danger" role="alert">
            {errorState}
        </div>
    ) : (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="taskName">
                <Form.Label>Task Name</Form.Label>
                <Form.Control type="text" placeholder="Enter task name" value={taskName} onChange={(e) => setTaskName(e.target.value)} isInvalid={!!validationErrors.name} />
                <Form.Control.Feedback type="invalid">{validationErrors.name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskDescription">
                <Form.Label>Task Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter task description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    isInvalid={!!validationErrors.description}
                />
                <Form.Control.Feedback type="invalid">{validationErrors.description}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskGroup">
                <Form.Label>Task Group</Form.Label>
                <Form.Control type="text" placeholder="Enter task group" value={taskGroup} onChange={(e) => setTaskGroup(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
                Add Task
            </Button>
        </Form>
    );
};

export default AddTaskForm;
