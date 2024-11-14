// src/pages/TheoryPage.js

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function TheoryPage() {
    // Sztuczne pobieranie danych, jak gdyby pochodzących z bazy danych
    const [theoryText, setTheoryText] = useState('');

    useEffect(() => {
        // W rzeczywistej aplikacji tutaj byłoby wywołanie API, które pobiera dane z bazy danych
        const fetchData = async () => {
            // Sztuczne opóźnienie, aby zasymulować asynchroniczne pobieranie danych
            await new Promise((resolve) => setTimeout(resolve, 500));
            // Przykładowy tekst teoretyczny (docelowo do pobrania z bazy danych)
            setTheoryText(
                'Teoria  ' +
                'Teoria  ' +
                'Teoria '
            );
        };

        fetchData();
    }, []);

    return (

        <Box sx={{ padding: 4, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Theory
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: '1.2rem', color: 'text.secondary' }}>
                {theoryText}
            </Typography>
        </Box>
    );
}

export default TheoryPage;
