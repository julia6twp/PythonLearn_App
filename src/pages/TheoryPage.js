// src/pages/TheoryPage.js

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainAppBar from "../components/MainAppBar";

function TheoryPage() {
    //do zmianiy po be
    const [theoryText, setTheoryText] = useState('');

    useEffect(() => {
        //do zmiany po be
        const fetchData = async () => {

            await new Promise((resolve) => setTimeout(resolve, 500));
            // Do zmiany po zrobieniu be
            setTheoryText(
                'Teoria  ' +
                'Teoria  ' +
                'Teoria '
            );
        };

        fetchData();
    }, []);

    return (
        <div>
            <MainAppBar />
        <Box sx={{ padding: 4, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Theory
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.2rem', color: 'text.secondary' }}>
                {theoryText}
            </Typography>
        </Box>
        </div>
    );
}

export default TheoryPage;
