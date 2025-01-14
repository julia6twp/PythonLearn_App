// src/components/HomeCards.js

import React from 'react';
import ActionAreaCard from './ActionAreaCard';
import Box from '@mui/material/Box';

//ikony
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import ScienceIcon from '@mui/icons-material/Science';



function TasksCards() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4, // odstępy między kartami
                paddingTop: 25, // odstęp od góry strony
            }}
        >

            <ActionAreaCard
                title="Beginner levels"
                description="Your first time with Python."
                IconComponent={BedroomBabyIcon}
                link="/tasks/beginner"
                iconColor="green"
            />
            <ActionAreaCard
                title="Intermediate levels"
                description="Expand your knowledge and skills by completing tasks."
                IconComponent={HourglassBottomIcon}
                link="/tasks/intermediate"
                iconColor="orange"
            />
            <ActionAreaCard
                title="Additional levels"
                description="Learn the most commonly used Python libraries."
                IconComponent={ScienceIcon}
                link="/tasks/additional"
                iconColor="black"
            />
        </Box>
    );
}

export default TasksCards;
