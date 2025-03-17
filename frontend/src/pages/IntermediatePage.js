import React from 'react';
import { Link } from 'react-router-dom';
import LevelsListBeginner from '../components/levels/LevelsListBeginner';
import MainAppBar from "../components/MainAppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LevelsListIntermediate from "../components/levels/LevelsListIntermediate";

function IntermediatePage() {

    const dummyLevels = Array.from({ length: 10 }, (_, i) => i + 1);

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
                    Difficulty level: Intermediate
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

            <LevelsListIntermediate levels={dummyLevels} />
        </div>
    );
}

export default IntermediatePage;
