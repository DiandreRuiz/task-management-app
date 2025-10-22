import { useContext, createContext, useState, useCallback } from "react";

export type Task = {
    owner: string | null;
    name: string;
    description: string;
    completed: boolean;
    taskGroup: string | null;
    taskColor: string | null;
};

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (name: string) => void;
    updateTask: (name: string, updates: Partial<Task>) => void;
    viewTask: (name: string) => Task | null;
    getTasksFromGroup: (taskGroup: string) => Task[] | null;
};

function getRandomColor(): string {
    const r = Math.floor(Math.random() * 256); // 0–255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [assignedTaskColors, setAssignedTaskColors] = useState<Record<string, string>>({});

    const updateTaskGroupDetails = useCallback(
        (task: Task) => {
            // If there is not taskGroup then there should not be a color
            const currentTaskGroup = task.taskGroup;
            if (currentTaskGroup === null) {
                task.taskColor = null;
                return;
            }

            // If there is a taskGroup, check if there is an established color for it
            const existingGroupColor = currentTaskGroup in assignedTaskColors ? assignedTaskColors[currentTaskGroup] : undefined;
            if (existingGroupColor) {
                task.taskColor = existingGroupColor;
            } else {
                const color = getRandomColor();
                task.taskColor = color;
                setAssignedTaskColors((prev) => ({ ...prev, [currentTaskGroup]: color }));
            }
        },
        [assignedTaskColors]
    );

    const addTask = useCallback(
        (task: Task) => {
            // Make sure the task created has a group in the first place
            // Then assign task color for this group
            updateTaskGroupDetails(task);
            setTasks((prev) => [...prev, task]);
        },
        [updateTaskGroupDetails]
    );

    const removeTask = useCallback((targetTaskName: string) => {
        setTasks((prev) => prev.filter((t) => t.name !== targetTaskName));
    }, []);

    const updateTask = useCallback(
        (name: string, updates: Partial<Task>) => {
            let taskToUpdate = tasks.find((t) => t.name === name);
            if (!taskToUpdate) {
                alert(`Could not find task name: ${name}`);
                return;
            }
            taskToUpdate = { ...taskToUpdate, ...updates };
            // If we change task group, make sure to run updateTaskGroupDetails
            if ("taskGroup" in updates) {
                updateTaskGroupDetails(taskToUpdate);
            }
            setTasks((prev) => prev.map((task) => (task.name === name ? taskToUpdate : task)));
        },
        [tasks, updateTaskGroupDetails]
    );

    const viewTask = useCallback(
        (name: string): Task | null => {
            const task = tasks.find((t) => t.name === name);
            if (task) {
                return task;
            }
            return null;
        },
        [tasks]
    );

    const getTasksFromGroup = useCallback(
        (taskGroup: string): Task[] | null => {
            const tasksFromGroup = tasks.filter((t) => t.taskGroup === taskGroup);
            return tasksFromGroup;
        },
        [tasks]
    );

    return <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask, viewTask, getTasksFromGroup }}>{children}</TaskContext.Provider>;
};

export const useTasks = () => {
    const ctx = useContext(TaskContext);
    if (!ctx) throw new Error("Cannot access tasks outside of a provider!");
    return ctx;
};
