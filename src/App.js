import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BeginnerPage from './pages/BeginnerPage';
import Quiz from './pages/Quiz';
import PracticalTask from './pages/PracticalTask';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/beginner" element={<BeginnerPage />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/practical-task" element={<PracticalTask />} />
            </Routes>
        </Router>
    );
}

export default App;