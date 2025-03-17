import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function LevelsListIntermediate({ levels }) {
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
                            backgroundColor: 'orange',
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            borderRadius: 0,
                            '&:hover': {
                                backgroundColor: 'darkorange'
                            }
                        }}
                    >
                        {level}
                    </Button>
                </Link>
            ))}
        </Box>
    );
}

export default LevelsListIntermediate;
