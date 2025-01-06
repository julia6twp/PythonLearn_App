import React from 'react';
import { Box, TextField, Button } from '@mui/material';

async function sendCodeToServer(code) {
    try {
        const response = await fetch('http://127.0.0.1:8000/execute-and-compare/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
        });

        const result = await response.json();
        if (result.status === 'success') {
            console.log('Correct answer!');
        } else if (result.status === 'fail') {
            console.log('Incorrect answer. Expected:', result.expected, 'Got:', result.actual);
        } else {
            console.error('Error:', result.error);
        }
    } catch (error) {
        console.error('Failed to send code to server:', error);
    }
}

function PracticalTask() {
    const [code, setCode] = React.useState('');

    const handleCompile = (e) => {
        e.preventDefault(); // Zapobiega odświeżeniu strony
        sendCodeToServer(code);
    };

    return (
        <div>
            <Box
                component="form"
                onSubmit={handleCompile} // Obsługa przesyłania formularza
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3,
                    paddingTop: 5,
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="Your code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    multiline
                    sx={{
                        width: '1000px',
                        height: '600px',
                        '& .MuiInputBase-root': {
                            height: '100%',
                            alignItems: 'flex-start',
                        },
                        '& .MuiInputBase-input': {
                            padding: '8px',
                        },
                    }}
                />

                <Box sx={{ width: '1000px', display: 'flex', justifyContent: 'right' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: 'black',
                        }}
                    >
                        COMPILE
                    </Button>
                </Box>
            </Box>
        </div>
    );

}

export default PracticalTask;
