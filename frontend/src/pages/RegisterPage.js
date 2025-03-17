import React from 'react';
import Box from "@mui/material/Box";
import logo from "../assets/logo.png";
import Typography from "@mui/material/Typography";
import RegisterTextField from "../components/login/RegisterTextField";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

function RegisterPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login");
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


                <RegisterTextField />
                <Button onClick={handleClick} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 2,
                    fontSize: 13,
                }}>Log in</Button>

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

export default RegisterPage;