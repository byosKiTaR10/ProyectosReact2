// ./components/Login.js
import React from 'react';
import { 
    Typography,
    Button,
    Container
 } from '@mui/material';

const Login = () => {
  const handleButtonClick = () => {
    alert('¡Botón clickeado!');
  };

  return (
    <Container>
      <Typography variant="h1" color="primary">
        Heading
      </Typography>
      <Typography variant="h2" color="secondary">
        Título H2
      </Typography>
      <Typography variant="h3" color="textPrimary">
        Título H3
      </Typography>

      <Button variant="text" color="primary">
        Botón Texto
      </Button>
      <Button variant="contained" color="secondary">
        Botón Contenido
      </Button>
      <Button variant="outlined" color="primary">
        Botón Contorno
      </Button>

      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Botón con Alert
      </Button>
    </Container>
  );
};

export default Login;

