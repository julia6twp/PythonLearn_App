import React from 'react';
import LoginTextField from '../../components/login/LoginTextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo.png'; // Upewnij się, że ścieżka do logo jest poprawna

function LoginPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh'
            }}
        >
            {/* Lewa kolumna - logo i formularz logowania */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 4
                }}
            >
                {/* Logo i nazwa aplikacji */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 4 // odstęp między logo a formularzem
                    }}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '140px', height: '140px', marginRight: '8px' }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: '54px', // Zmieniamy rozmiar czcionki
                        }}
                    >
                        LEARNING
                    </Typography>
                </Box>

                {/* Formularz logowania */}
                <LoginTextField />
            </Box>

            {/* Prawa kolumna - obraz */}
            <Box
                sx={{
                    flex: 1,
                    backgroundImage: 'url(/assets/belll.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
        </Box>
    );
}

export default LoginPage;
