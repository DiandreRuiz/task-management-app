import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import HomePage from "./components/HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.css"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  )
}

export default App
