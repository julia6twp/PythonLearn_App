import React, { useEffect, useState } from 'react';
import LevelsListBeginner from '../components/levels/LevelsListBeginner';
import MainAppBar from "../components/MainAppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

async function fetchLevels() {
    try {
        const response = await fetch('http://127.0.0.1:8000/get-levels/');
        if (!response.ok) {
            throw new Error('Failed to fetch levels');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching levels:', error);
        return {};
    }
}

function BeginnerPage() {
    const [levels, setLevels] = useState([]);

    useEffect(() => {
        async function loadLevels() {
            const data = await fetchLevels();

            if (data.beginner) {
                setLevels(Array.from({ length: data.beginner }, (_, i) => i + 1));
            }
        }
        loadLevels();
    }, []);

    return (
        <div>
            <MainAppBar />
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 4, paddingBottom: 4 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    sx={{ fontWeight: 'bold' }}
                >
                    Difficulty level: Beginner
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 4 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    sx={{ fontSize: '1.5rem' }}
                >
                    Choose Your Level
                </Typography>
            </Box>

            {/* tu wstawić poziomy */}
            <LevelsListBeginner levels={levels} />
        </div>
    );
}

export default BeginnerPage;
