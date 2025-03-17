import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';

function LevelsListBeginner({ levels }) {
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
                <Link
                    to={level <= 5 ? `/level/${level}` : '#'}
                    key={level}
                    style={{ textDecoration: 'none', pointerEvents: level > 5 ? 'none' : 'auto' }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: level <= 5 ? 'green' : 'grey',
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            borderRadius: 0,
                            '&:hover': {
                                backgroundColor: level <= 5 ? 'darkgreen' : 'darkgrey'
                            }
                        }}
                    >
                        {level <= 5 ? level : <LockIcon />}
                    </Button>
                </Link>
            ))}
        </Box>
    );
}

export default LevelsListBeginner;

