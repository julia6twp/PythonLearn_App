import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

async function fetchAnswer(difficulty, level) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/get-level-details/${difficulty}/${level}/`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data.answer; // Zwraca poprawną odpowiedź
    } catch (error) {
        console.error('Failed to fetch answer from server:', error);
        return null;
    }
}

function PracticalTask({ difficulty, level }) {
    const [code, setCode] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [resultMessage, setResultMessage] = useState('');

    useEffect(() => {
        // Pobierz poprawną odpowiedź z backendu
        const getAnswer = async () => {
            try {
                const answer = await fetchAnswer(difficulty, level);
                setCorrectAnswer(answer);
            } catch (error) {
                setResultMessage('Error loading correct answer.');
            }
        };
        getAnswer();
    }, [difficulty, level]);

    const handleCompile = async (e) => {
        e.preventDefault(); // Zapobiega odświeżeniu strony
        if (!correctAnswer) {
            setResultMessage('Error: Correct answer not loaded.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/execute-code/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            });

            const result = await response.json();

            // Sprawdzenie statusu odpowiedzi
            if (result.status === 'success') {
                // Porównanie console_output z correctAnswer
                if (result.console_output === correctAnswer) {
                    setResultMessage('Correct answer!');
                } else {
                    setResultMessage(`Incorrect answer. Expected: ${correctAnswer}, Got: ${result.console_output}`);
                }
            } else if (result.status === 'error') {
                // Obsługa błędów wykonania
                setResultMessage(`Error: ${result.error}`);
            } else {
                setResultMessage('Unexpected response from server.');
            }
        } catch (error) {
            setResultMessage(`Failed to send code to server: ${error.message}`);
        }
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

                {/* Wyświetlanie wyniku */}
                {resultMessage && (
                    <Typography variant="h6" sx={{ marginTop: 2, color: 'blue' }}>
                        {resultMessage}
                    </Typography>
                )}
            </Box>
        </div>
    );
}

export default PracticalTask;
