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
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from './components/login/ProtectedRoute';
import { AuthProvider } from './components/login/AuthContext';

function Routing() {
    return (
        <AuthProvider>
            <Routes>
                {/* Dostępne dla wszystkich */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Strony wymagające uwierzytelnienia */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <ProtectedRoute>
                            <About />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/tasks"
                    element={
                        <ProtectedRoute>
                            <Tasks />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/achievements"
                    element={
                        <ProtectedRoute>
                            <AchievementsPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/tasks/beginner"
                    element={
                        <ProtectedRoute>
                            <BeginnerPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/tasks/intermediate"
                    element={
                        <ProtectedRoute>
                            <IntermediatePage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/tasks/additional"
                    element={
                        <ProtectedRoute>
                            <AdditionalPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/level/:levelId"
                    element={
                        <ProtectedRoute>
                            <LevelPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/theory"
                    element={
                        <ProtectedRoute>
                            <TheoryPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/quiz"
                    element={
                        <ProtectedRoute>
                            <Quiz />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/practical-task"
                    element={
                        <ProtectedRoute>
                            <PracticalTask />
                        </ProtectedRoute>
                    }
                />

                {/* Strona błędu */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </AuthProvider>
    );
}

export default Routing;

