import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button } from '@mui/material';
import validation from './validation';

export default function BasicTextFields() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { id, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validation(values));
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
          <TextField id="email" label="email" value={values.email} variant="outlined" onChange={handleChange} />
          {errors.email && <p style={{ color: "red", fontSize: "15px" }}>{errors.email}</p>}
          <TextField id="password" label="password" value={values.password} variant="outlined" type="password" onChange={handleChange} />
          {errors.password && <p style={{ color: "red", fontSize: "15px" }}>{errors.password}</p>}
          <Button variant="contained" type="submit">Sign In</Button>
        </Box>
      </Paper>
    </Container>
  );
}
