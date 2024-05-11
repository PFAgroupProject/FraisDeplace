import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, Box, TextField, Button } from '@mui/material';

export default function User() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const isFormValid = () => {
        return name && lastname && role && password && email;
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            const user = { name, lastname, role, password, email };
            console.log(user);

            fetch("http://localhost:8083/Users/User", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })
            .then(() => {
                console.log("new user added");
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
                localStorage.setItem('userInfoSaved', true);
                navigate('/Login');
            })
            .catch(error => console.error("Error adding new user:", error));
        }
    };

    const handleSignIn = () => {
        navigate('/Login'); 
    };

    return (
        <Container>
            <Paper elevation={3} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
                <h2 style={{ color: '#1E7FCB', textAlign: 'center', fontSize: 28 }}>FaDigua</h2>
                <h1 style={{ color: 'grey', textAlign: 'center' }}>Avec FaDigua, déplacez-vous et restez en contact avec votre entourage.</h1>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="user-name" label="First Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField id="user-last-name" label="Last Name" variant="outlined" fullWidth value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    <TextField id="user-role" label="Role" variant="outlined" fullWidth value={role} onChange={(e) => setRole(e.target.value)} />
                    <TextField id="user-password" label="Password" type="password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                    <TextField id="user-email" label="Email" type="email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Button variant="contained" onClick={handleSignUp} style={{ marginRight: '8px' }}>Sign Up</Button>
                        <Button variant="contained" onClick={handleSignIn}>Sign In</Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}