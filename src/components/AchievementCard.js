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
                width: 300,
                height: 260,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
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
                        align="center"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', textAlign: 'center' }}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
