import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import AddEvent from "./Pages/AddEvent";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/addEvent" element={<AddEvent />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;