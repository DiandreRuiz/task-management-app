// Creating a hook which will manage the state of the edit modal
// through decoupled logic

import { useState } from "react";
import type { Task } from "../contexts/TaskContext";

// We create a hook as a function
export const useEditModal = () => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    const openModal = (task: Task) => {
        setSelectedTask(task);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false)
        setSelectedTask(null);
    }

    return {
        openModal,
        closeModal,
        showModal,
        selectedTask
    }
};
