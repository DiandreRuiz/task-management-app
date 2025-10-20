import { useContext, createContext, useState, useCallback } from "react";

export type Task = {
    owner: string | null;
    name: string;
    description: string;
    completed: boolean;
    taskGroup: string | null;
};

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (name: string) => void;
    updateTask: (name: string, updates: Partial<Task>) => void;
};

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = useCallback((task: Task) => {
        setTasks((prev) => [...prev, task]);
    }, []);

    const removeTask = useCallback((targetTaskName: string) => {
        setTasks((prev) => prev.filter((t) => t.name !== targetTaskName));
    }, []);

    const updateTask = useCallback((name: string, updates: Partial<Task>) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.name === name
                    ? { ...task, ...updates } // Immutable update: spread existing task + new updates
                    : task
            )
        );
    }, []);

    return <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>{children}</TaskContext.Provider>;
};

export const useTasks = () => {
    const ctx = useContext(TaskContext);
    if (!ctx) throw new Error("Cannot access tasks outside of a provider!");
    return ctx;
};
