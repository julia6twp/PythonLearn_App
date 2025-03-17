import React from 'react';
import LoginTextField from '../../components/login/LoginTextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo.png';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";


function LoginPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/register");
    };
    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh'
            }}
        >
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

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 4
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
                            fontSize: '54px',
                        }}
                    >
                        LEARNING
                    </Typography>
                </Box>

                {/* Formularz logowania */}
                <LoginTextField />
                <Button onClick={handleClick} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 2,
                    fontSize: 13,
                }}>Register</Button>
            </Box>

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
