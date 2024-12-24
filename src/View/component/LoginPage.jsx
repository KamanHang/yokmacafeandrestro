import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../assets/images/logo.png';
import projectColor from '../themepack';
import axios from 'axios';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            Yokma Cafe and Restro {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [googleCred, setGoogleCred] = useState("");
    const [googleDetailsDecoded, setGoogleDetailsDecoded] = useState([]);


    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        navigate('/')

    };

    const handleSuccess = (response) => {
        console.log("Success")
        // console.log(response)
        console.log(response.credential)
        setGoogleCred(response.credential)
        localStorage.setItem("userCredentials", response.credential)
        navigate('/side')

    }

    const handleError = () => {
        console.log("Error")
        console.log(response);

    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img style={{ width: '30%' }} className="profile" alt="profilepicture" src={Logo} />
                    {/* <Typography component="h1" variant="h5">
            Login
          </Typography> */}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => { setPassword(e.target.value) }}

                        />
                        {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
                        <Box justifyContent="center">
                            <Button
                                type="submit"
                                width="1rem"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: projectColor.primaryColor }}
                            >
                                Log in
                            </Button>
                        </Box>
                        <Grid container>
                            <GoogleOAuthProvider clientId='639862211914-en28d2v3ifqd440o7n8afkksl48i6qog.apps.googleusercontent.com'>
                                <GoogleLogin
                                    onSuccess={handleSuccess}
                                    onError={handleError}
                                />
                            </GoogleOAuthProvider>


                        </Grid>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}