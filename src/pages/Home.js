// src/pages/Home.js
import React from 'react';
import MainAppBar from '../components/MainAppBar';
import HomeCards from "../components/HomeCards";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Home() {
    return (
        <div>
            <MainAppBar />

            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 4, paddingBottom: 4 }}>
                <Typography variant="h4" component="h1" align="center">
                    Witamy na stronie!
                </Typography>
            </Box>

            <HomeCards />
        </div>
    );
}

export default Home;
