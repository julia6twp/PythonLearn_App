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
                gap: 4,
                paddingTop: 25,
            }}
        >

            <ActionAreaCard
                title="Beginner"
                description="Your first time with Python."
                IconComponent={BedroomBabyIcon}
                link="/tasks/beginner"
                iconColor="green"
            />
            <ActionAreaCard
                title="Intermediate"
                description="Expand your knowledge and skills by completing tasks."
                IconComponent={HourglassBottomIcon}
                link="/tasks/intermediate"
                iconColor="orange"
            />
            <ActionAreaCard
                title="Libraries"
                description="Learn the most commonly used Python libraries."
                IconComponent={ScienceIcon}
                link="/tasks/additional"
                iconColor="black"
            />
        </Box>
    );
}

export default TasksCards;
