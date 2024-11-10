// src/components/HomeCards.js

import React from 'react';
import ActionAreaCard from './ActionAreaCard';
import Box from '@mui/material/Box';

//ikony
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentIcon from '@mui/icons-material/Assignment';

function HomeCards() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4, // odstępy między kartami
                paddingTop: 4, // odstęp od góry strony
            }}
        >

            <ActionAreaCard
                title="About Us"
                description="Test your knowledge with our interactive quizzes."
                IconComponent={InfoIcon}
                link="/about"
                iconColor="black"
            />
            <ActionAreaCard
                title="Tasks"
                description="Engage with hands-on tasks to deepen your skills."
                IconComponent={AssignmentIcon}
                link="/tasks"
                iconColor="black"
            />
            <ActionAreaCard
                title="Achievements"
                description="Join discussions and learn from other developers."
                IconComponent={EmojiEventsIcon}
                link="/achievements"
                iconColor="black"
            />
        </Box>
    );
}

export default HomeCards;
