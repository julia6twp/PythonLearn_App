import React from 'react';
import { Link } from 'react-router-dom';
import LevelsList from '../components/levels/LevelsList';
import MainAppBar from "../components/MainAppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"; // zaimportuj komponent z przyciskami poziomów

function BeginnerPage() {
    // Lista poziomów - do zmiany po stworzeniu backendu
    const dummyLevels = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div>
            <MainAppBar />
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 4, paddingBottom: 4 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    sx={{ fontWeight: 'bold' }}  // Dodaje pogrubienie
                >
                    Difficulty level: Beginner
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 4 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    sx={{ fontSize: '1.5rem' }}  // Ustawia mniejszy rozmiar czcionki
                >
                    Choose Your Level
                </Typography>
            </Box>


            {/* Linki do quizu i zadania praktycznego */}
            {/*<Link to="/quiz">Go to Quiz</Link>*/}
            {/*<br />*/}
            {/*<Link to="/practical-task">Go to Practical Task</Link>*/}

            {/* Lista poziomów */}
            <LevelsList levels={dummyLevels} />
        </div>
    );
}

export default BeginnerPage;
