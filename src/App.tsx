import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import { TaskProvider } from "./contexts/TaskContext";

function App() {
    return (
        <>
            <TaskProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                </Routes>
            </TaskProvider>
        </>
    );
}

export default App;
