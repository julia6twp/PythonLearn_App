import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function LevelsListAdditional({ levels }) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 2,
                maxWidth: '600px',
                margin: '0 auto',
                paddingTop: 4
            }}
        >
            {levels.map((level) => (
                <Link to={`/level/${level}`} key={level} style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        sx={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: '#000000',
                            color: 'white',
                            fontSize: '1.5rem',  // Powiększa rozmiar tekstu
                            fontWeight: 'bold',  // Opcjonalnie, dodaje pogrubienie
                            borderRadius: 0,
                            '&:hover': {
                                backgroundColor: '#2a2a2a'
                            }
                        }}
                    >
                        {level}
                    {/*    Gry ukończony poziom*/}
                    {/*    import DoneIcon from '@mui/icons-material/Done'; */}
                    </Button>
                </Link>
            ))}
        </Box>
    );
}

export default  LevelsListAdditional;
