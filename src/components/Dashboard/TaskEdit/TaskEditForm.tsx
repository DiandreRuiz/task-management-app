import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import type { Task } from "../../../contexts/TaskContext";
import { useTasks } from "../../../contexts/TaskContext";

type TaskEditFormProps = Task & {
    onSave?: () => void;
};

const TaskEditForm: React.FC<TaskEditFormProps> = ({ name, description, completed, taskGroup, onSave }) => {
    // REMINDER: We aren't actually updating a backend we're just showcasing an understanding of the context API
    // so we'll just use that context API for global state of tasks
    const { updateTask } = useTasks();
    const [taskName, setTaskName] = useState(name);
    const [taskDescription, setTaskDescription] = useState(description);
    const [taskCompleted, setTaskCompleted] = useState(completed);
    const [taskGroupState, setTaskGroupState] = useState(taskGroup ? taskGroup : "");
    const [errorState, setErrorState] = useState<string | null>(null);

    // Store original values for comparison
    const originalValues = {
        name,
        description,
        completed,
        taskGroup: taskGroup || null,
    };

    // Check if form has any changes (is "dirty")
    const isFormDirty = () => {
        // Check if name changed and is not empty
        const nameChanged = taskName !== originalValues.name && taskName.trim() !== "";

        // Check if description changed and is not empty
        const descriptionChanged = taskDescription !== originalValues.description && taskDescription.trim() !== "";

        // Check if completed status changed
        const completedChanged = taskCompleted !== originalValues.completed;

        // Check if taskGroup changed
        const originalTaskGroup = originalValues.taskGroup;
        const newTaskGroup = taskGroupState.trim() === "" ? null : taskGroupState.trim();
        const taskGroupChanged = newTaskGroup !== originalTaskGroup;

        return nameChanged || descriptionChanged || completedChanged || taskGroupChanged;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Build updates object with only changed and non-null values
            const updates: Partial<Task> = {};

            // Check if name changed and is not empty
            if (taskName !== originalValues.name && taskName.trim() !== "") {
                updates.name = taskName.trim();
            }

            // Check if description changed and is not empty
            if (taskDescription !== originalValues.description && taskDescription.trim() !== "") {
                updates.description = taskDescription.trim();
            }

            // Check if completed status changed
            if (taskCompleted !== originalValues.completed) {
                updates.completed = taskCompleted;
            }

            // Check if taskGroup changed (handle null/empty string conversion)
            const originalTaskGroup = originalValues.taskGroup;
            const newTaskGroup = taskGroupState.trim() === "" ? null : taskGroupState.trim();

            if (newTaskGroup !== originalTaskGroup) {
                updates.taskGroup = newTaskGroup;
            }

            // Only update if there are actual changes
            if (Object.keys(updates).length > 0) {
                updateTask(name, updates);
                console.log("Updated task with changes:", updates);
            } else {
                console.log("No changes detected, skipping update");
            }

            setErrorState(null);
            onSave?.();
            // Close the modal after saving (whether changes were made or not)
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
            <Button type="submit" disabled={!isFormDirty()}>
                Save
            </Button>
        </Form>
    );
};

export default TaskEditForm;
