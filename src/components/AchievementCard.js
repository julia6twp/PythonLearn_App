// src/components/AchievementCard.js

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

export default function AchievementCard({ title, description, IconComponent, isAchieved }) {
    const iconColor = isAchieved ? 'gold' : 'lightgray';

    return (
        <Card
            sx={{
                width: 300, // Stała szerokość
                height: 260, // Stała wysokość
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Ustaw elementy w pionie
                alignItems: 'center', // Wyśrodkuj zawartość
            }}
        >
            <CardActionArea sx={{ flexGrow: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 2,
                    }}
                >
                    <IconComponent sx={{ fontSize: 80, color: iconColor }} />
                </Box>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center" // Wyśrodkuj tekst w poziomie
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', textAlign: 'center' }} // Wyśrodkuj opis
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
