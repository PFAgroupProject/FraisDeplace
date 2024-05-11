import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button } from '@mui/material';
import authService from './authService';
import { useNavigate } from 'react-router-dom';
import validation from './validation';

export default function BasicTextFields() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
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

  async function handleLogin() {
    try {
      const response = await authService.login({
        email: values.email,
        password: values.password
      });
      setErrorMessage(response.data);
      console.log(response.data);
      if (response.data === "Login successful") {
        navigate('/fonc', { replace: true });
      }
    } catch (error) {
      setErrorMessage('Invalid credentials or connection issue');
    }
  }

  function handleAdminClick() {
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
