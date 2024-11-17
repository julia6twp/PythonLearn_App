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
import LoginPage from "./pages/login/LoginPage";
import LevelPage from "./pages/LevelPage";
import TheoryPage from "./pages/TheoryPage";
import AchievementsPage from "./pages/AchievementPage";
import IntermediatePage from "./pages/IntermediatePage";
import AdditionalPage from "./pages/AdditionalPage";

function Routing() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/tasks/beginner" element={<BeginnerPage />} />
            <Route path="/tasks/intermediate" element={<IntermediatePage />} />
            <Route path="/tasks/additional" element={<AdditionalPage />} />
            <Route path="/level/:levelId" element={<LevelPage />} />
            <Route path="/theory" element={<TheoryPage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/practical-task" element={<PracticalTask />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default Routing;
