import { useContext, createContext, useState, useCallback } from "react";

type Task = {
    owner: string;
    name: string;
    description: string;
    completed: boolean;
    taskGroup: string;
};

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
};

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const addTask = useCallback((task: Task) => setTasks((prev) => [...prev, task]), []);

    return <TaskContext.Provider value={{ tasks, addTask }}>{children}</TaskContext.Provider>;
};

export const useTasks = () => {
    const ctx = useContext(TaskContext);
    if (!ctx) throw new Error("Cannot access tasks outside of a provider!");
    return ctx;
};
