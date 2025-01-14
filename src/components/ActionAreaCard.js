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
        <Card
            sx={{
                width: 325, // Stała szerokość
                height: 250, // Stała wysokość
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Rozdzielenie zawartości
            }}
            onClick={handleClick}
        >
            <CardActionArea
                sx={{
                    height: '100%', // Wypełnienie całej karty
                }}
            >
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
                <CardContent
                    sx={{
                        flexGrow: 1, // Rozciąganie zawartości w pionie
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', // Wyśrodkowanie tekstu w pionie
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                            overflow: 'hidden', // Ukrycie nadmiaru tekstu
                            textOverflow: 'ellipsis', // Dodanie "..." dla długiego tekstu
                            whiteSpace: 'nowrap', // Zablokowanie zawijania tekstu
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2, // Maksymalna liczba linii
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
