import React from 'react';
import QuizComponent from "../components/QuizComponent";
import MainAppBar from "../components/MainAppBar";
import { Box, Typography } from '@mui/material';

function Quiz() {
    return (
        <div>
            <MainAppBar />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Wyśrodkowanie w poziomie
                // justifyContent: 'center', // Wyśrodkowanie w pionie
                minHeight: '100vh', // Cała wysokość ekranu
                textAlign: 'center', // Wyśrodkowanie tekstu
                padding: 12, // Odstępy od krawędzi
            }}
        >

            <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
                Question 3 / 10
            </Typography>
            <QuizComponent />
        </Box>
        </div>
    );
}

export default Quiz;
