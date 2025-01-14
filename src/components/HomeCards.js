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
                description="Learn more about the game."
                IconComponent={InfoIcon}
                link="/about"
                iconColor="black"
            />
            <ActionAreaCard
                title="Tasks"
                description="Check which tasks are available."
                IconComponent={AssignmentIcon}
                link="/tasks"
                iconColor="black"
            />
            <ActionAreaCard
                title="Achievements"
                description="View the achievements you’ve earned."
                IconComponent={EmojiEventsIcon}
                link="/achievements"
                iconColor="black"
            />
        </Box>
    );
}

export default HomeCards;
