import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function RegisterTextField() {
    const navigate = useNavigate();

    // Stany dla loginu, hasła oraz ich błędów
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [reppassword, setrepPassword] = React.useState('');
    const [loginError, setLoginError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [serverError, setServerError] = React.useState(''); // Błąd z serwera

    // Funkcja do obsługi rejestrowania
    const handleRegister = async (event) => {
        event.preventDefault(); // zapobiega odświeżeniu strony

        const isPasswordCorrect = password === reppassword;
        setPasswordError(!isPasswordCorrect);

        if (!isPasswordCorrect) {
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login, password }),
            });

            if (response.ok) {
                alert("Zarejestrowano pomyślnie!");
                navigate("/login");
            } else {
                const errorData = await response.json();
                setServerError(errorData.error || "Nieznany błąd serwera");
            }
        } catch (error) {
            console.error("Błąd podczas rejestracji:", error);
            setServerError("Nie udało się połączyć z serwerem.");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleRegister}
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
                onChange={(e) => setLogin(e.target.value)}
                helperText={loginError ? "Incorrect login." : ""}
            />
            <TextField
                error={passwordError}
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                helperText={passwordError ? "Passwords do not match." : ""}
            />
            <TextField
                error={passwordError}
                label="Repeat Password"
                type="password"
                value={reppassword}
                onChange={(e) => setrepPassword(e.target.value)}
                helperText={passwordError ? "Passwords do not match." : ""}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: "black" }}>
                Register
            </Button>

            {serverError && (
                <Typography color="error" sx={{ mt: 2 }}>
                    {serverError}
                </Typography>
            )}
        </Box>
    );
}
