import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext'; // Import funkcji login z kontekstu

export default function LoginTextField() {
    const navigate = useNavigate();
    const { login: authLogin } = useAuth(); // Funkcja login z kontekstu

    // Stany dla loginu, hasła oraz błędów
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginError, setLoginError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [serverError, setServerError] = React.useState(''); // Błąd z serwera

    // Funkcja do obsługi logowania
    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login, password }),
            });

            if (response.ok) {
                const data = await response.json();
                authLogin();
                navigate("/");
            } else {
                const errorData = await response.json();
                setServerError(errorData.error || "Incorrect login or password.");
                setLoginError(true);
                setPasswordError(true);
            }
        } catch (error) {
            console.error("Login error:", error);
            setServerError("Server connection error.");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                justifyContent: 'center',
                gap: 3, // odstępy między kartami
                paddingTop: 5, // odstęp od góry strony
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                error={loginError}
                label="Login"
                value={login}
                onChange={(e) => {
                    setLogin(e.target.value);
                    setLoginError(false); // Reset błędu
                }}
                helperText={loginError ? "Incorrect login." : ""}
            />
            <TextField
                error={passwordError}
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(false); // Reset błędu
                }}
                helperText={passwordError ? "Incorrect password." : ""}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: "black" }}>
                Log in
            </Button>

            {serverError && (
                <Typography color="error" sx={{ mt: 2 }}>
                    {serverError}
                </Typography>
            )}
        </Box>
    );
}
