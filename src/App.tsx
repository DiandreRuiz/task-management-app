import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./components/Landing/Landing";
import TaskView from "./components/TaskView/TaskView";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import { TaskProvider } from "./contexts/TaskContext";

function App() {
    return (
        <>
            <TaskProvider>
                <NavBar />
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/tasks" element={<TaskView />}></Route>
                    <Route path="/tasks/:taskId" element={<TaskView />}></Route>
                </Routes>
            </TaskProvider>
        </>
    );
}

export default App;
