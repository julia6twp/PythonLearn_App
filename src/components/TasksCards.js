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
                description="Test your knowledge with our interactive quizzes."
                IconComponent={BedroomBabyIcon}
                link="/tasks/beginner"
                iconColor="green"
            />
            <ActionAreaCard
                title="Intermediate levels"
                description="Engage with hands-on tasks to deepen your skills."
                IconComponent={HourglassBottomIcon}
                link="/tasks/intermediate"
                iconColor="orange"
            />
            <ActionAreaCard
                title="Additional levels"
                description="Join discussions and learn from other developers."
                IconComponent={ScienceIcon}
                link="/achievements"
                iconColor="black"
            />
        </Box>
    );
}

export default TasksCards;
