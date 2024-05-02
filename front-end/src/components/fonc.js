import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function ExpenseForm() {
  const [form, setForm] = useState({
    motif: '',
    ville: '',
    trans: '',
    dated: '',
    datef: '',
    frais: ''
  });

  const isFormValid = () => {
    return form.motif && form.ville && form.trans && form.dated && form.datef && form.frais;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // Log the form data before sending
      console.log('Submitting form:', JSON.stringify(form));
      fetch("http://localhost:8083/Demandes/Demande", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      .then(() => {
        console.log("new demande added");
    })
    .catch(error => console.error("Error adding new user:", error));
}
};


  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" sx={{ my: 4 }}>
        Créer une demande
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        {Object.keys(form).map((key) => (
          <TextField
            key={key}
            margin="normal"
            required
            fullWidth
            id={key}
            label={`Entrez ${key}`}
            name={key}
            type={key.includes('date') ? 'date' : key === 'frais' ? 'number' : 'text'}
            value={form[key]}
            onChange={handleChange}
            autoComplete="off"
          />
        ))}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Envoyer la demande
        </Button>
      </Box>
    </Container>
  );
}

export default ExpenseForm;
