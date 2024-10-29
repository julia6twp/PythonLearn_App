import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Home from './components/Home';
import About from './components/About';
import BeginnerPage from './components/BeginnerPage';
import Quiz from './components/Quiz';
import PracticalTask from './components/PracticalTask';

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/beginner" element={<BeginnerPage />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/practical-task" element={<PracticalTask />} />
                </Routes>
            </Router>
        </MantineProvider>
    );
}

export default App;