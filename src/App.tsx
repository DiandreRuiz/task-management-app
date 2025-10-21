import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import { TaskProvider } from "./contexts/TaskContext";

function App() {
    return (
        <>
            <TaskProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                </Routes>
            </TaskProvider>
        </>
    );
}

export default App;
