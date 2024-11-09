// src/components/HomeCards.js

import React from 'react';
import ActionAreaCard from './ActionAreaCard';
import Box from '@mui/material/Box';

function HomeCards() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4, // odstępy między kartami
                paddingTop: 30, // odstęp od góry strony
            }}
        >

            <ActionAreaCard
                title="About Us"
                description="Test your knowledge with our interactive quizzes."
                image="/static/images/cards/quiz.jpg"
            />
            <ActionAreaCard
                title="Tasks"
                description="Engage with hands-on tasks to deepen your skills."
                image="/static/images/cards/tasks.jpg"
            />
            <ActionAreaCard
                title="Achievements"
                description="Join discussions and learn from other developers."
                image="/static/images/cards/community.jpg"
            />
        </Box>
    );
}

export default HomeCards;
