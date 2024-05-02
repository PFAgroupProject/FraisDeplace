import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button } from '@mui/material';
import validation from './validation';
import { useNavigate } from 'react-router-dom';  

export default function BasicTextFields() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  // eslint-disable-next-line
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();  

  function handleChange(e) {
    const { id, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      handleLogin();
    }
  }

  function handleLogin() {
    fetch('http://localhost:8083/Users/User', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: values.email, 
            password: values.password 
        })
    })
    .then(response => {
        if (response.ok) {
            return response.text(); 
        } else {
            throw new Error('Login failed');
        }
    })
    .then(data => {
        console.log('Réponse API:', data); 
        if (data.includes("new User was added")) { 
            navigate('/fonc', { replace: true }); 
        } else {
            throw new Error('Identifiants incorrects ou problème de connexion');
        }
    })
    .catch(error => {
        console.error('Erreur lors de la connexion:', error);
    });
  }

  function handleAdminClick() {
    // Naviguer vers la page 'mang'
    navigate('/mang');
  }

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
        <h1 style={{ color: '#1E7FCB', textAlign: 'center', fontSize: 28 }}>Fatigua</h1>
        
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField id="email" label="Email" value={values.email} variant="outlined" onChange={handleChange} />
          {errors.email && <p style={{ color: "red", fontSize: "15px" }}>{errors.email}</p>}
          <TextField id="password" label="Password" value={values.password} variant="outlined" type="password" onChange={handleChange} />
          {errors.password && <p style={{ color: "red", fontSize: "15px" }}>{errors.password}</p>}
          {errorMessage && <p style={{ color: "red", fontSize: "15px" }}>{errorMessage}</p>}
          <Button variant="contained" type="submit">Sign In</Button>
          <br />
          <Button variant="contained" onClick={handleAdminClick}>Admin</Button>
        </Box>
      </Paper>
    </Container>
  );
}
