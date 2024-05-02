import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function OutlinedButtons() {
  const navigate = useNavigate();

  const handlePrimaryButtonClick = () => {
    // Rediriger vers la page 'fonc'
    navigate('/fonc');
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px', height: '100vh', backgroundColor: '#FFFFFF' }}>
      <h1 style={{ color: '#1E7FCB', marginBottom: '30px', fontSize: '2rem' }}>Manager, Choix</h1>
      <Stack direction="column" spacing={4} alignItems="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handlePrimaryButtonClick}
        >
          Créer une demande
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="#outlined-buttons"
        >
          Visualiser les demandes
        </Button>
      </Stack>
    </div>
  );
}
