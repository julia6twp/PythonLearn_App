// src/pages/TheoryPage.js

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainAppBar from "../components/MainAppBar";
import {Button} from "@mui/material";

function TheoryPage() {
    //do zmianiy po be
    const [theoryText, setTheoryText] = useState('');
    const [theoryText2, setTheoryText2] = useState('');

    useEffect(() => {
        //do zmiany po be
        const fetchData = async () => {

            await new Promise((resolve) => setTimeout(resolve, 500));
            // Do zmiany po zrobieniu be
            setTheoryText(
                'The print function in Python is used to display information on the screen. It can show text, numbers, logical results, or variable values.' +
                '' +
                ''
            );

            setTheoryText2(
                ' Examples of using the print function: '
            )
        };

        fetchData();
    }, []);

    return (
        <div>
            <MainAppBar />
        <Box sx={{ padding: 4, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Level 2: What is the print function?
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.2rem', color: 'text.secondary', padding: 3 }}>
                {theoryText}
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.2rem', color: 'text.secondary', padding: 1 }}>
                {theoryText2}
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.2rem', color: 'text.secondary', fontWeight: 'bold', padding: 1 }}>
                print('x > val - ', x > val)
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.2rem', color: 'text.secondary' }}>
                The function will display the text 'x > val - ' and the result of the comparison x > val (either True or False), where x and val are variables.
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.2rem', color: 'text.secondary', fontWeight: 'bold', padding: 1 }}>

            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.2rem', color: 'text.secondary', fontWeight: 'bold', padding: 2 }}>
                print('b == 10')
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.2rem', color: 'text.secondary' }}>
                The function will display the text 'b == 10'. In this case, it does not check if b equals 10, it simply prints the string.
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.2rem', color: 'text.secondary', fontWeight: 'bold', padding: 1 }}>

            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.2rem', color: 'text.secondary', fontWeight: 'bold', padding: 2 }}>
                print("Hello world!")
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.2rem', color: 'text.secondary' }}>
                The function will display the text "Hello world!". This is the simplest example of using the print function.
            </Typography>
            <Box sx={{ width: '1000px', display: 'flex',justifyContent: 'right' }}>
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                        backgroundColor: 'black',
                    }}
                >
                    GO TO TASK
                </Button>
            </Box>
        </Box>

        </div>
    );
}

export default TheoryPage;
