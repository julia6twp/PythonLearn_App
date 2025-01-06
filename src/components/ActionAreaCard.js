// src/components/ActionAreaCard.js

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard({ title, description, IconComponent, link, iconColor }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
            <CardActionArea>
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
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
