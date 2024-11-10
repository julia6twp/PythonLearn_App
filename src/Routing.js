// src/Routing.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BeginnerPage from './pages/BeginnerPage';
import Quiz from './pages/Quiz';
import PracticalTask from './pages/PracticalTask';
import ErrorPage from './pages/ErrorPage';
import Tasks from "./pages/Tasks";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/levels/beginner" element={<BeginnerPage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/practical-task" element={<PracticalTask />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default Routing;
