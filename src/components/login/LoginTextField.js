import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function LoginTextField() {
    // Stany dla loginu, hasła oraz ich błędów
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginError, setLoginError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    // Funkcja do obsługi logowania
    const handleLogin = (event) => {
        event.preventDefault(); // zapobiega odświeżeniu strony

        // Sprawdzenie, czy login i hasło są poprawne
        const isLoginCorrect = login === 'admin';
        const isPasswordCorrect = password === 'admin';

        setLoginError(!isLoginCorrect);       // Jeśli login niepoprawny, ustaw błąd
        setPasswordError(!isPasswordCorrect); // Jeśli hasło niepoprawne, ustaw błąd

        if (isLoginCorrect && isPasswordCorrect) {
            alert("Zalogowano pomyślnie!");
            // tutaj można dodać np. przekierowanie po poprawnym logowaniu
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
                onChange={(e) => setLogin(e.target.value)}
                helperText={loginError ? "Incorrect login." : ""}
            />
            <TextField
                error={passwordError}
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                helperText={passwordError ? "Incorrect password." : ""}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: "black" }}>
                Log in
            </Button>

            {(loginError || passwordError) && (
                <Typography color="error" sx={{ mt: 2 }}>
                    Niepoprawny login lub hasło.
                </Typography>
            )}
        </Box>
    );
}
