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
                alignItems: 'center',
                minHeight: '100vh',
                textAlign: 'center',
                padding: 12,
            }}
        >

            <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
            </Typography>
            <QuizComponent />
        </Box>
        </div>
    );
}

export default Quiz;
