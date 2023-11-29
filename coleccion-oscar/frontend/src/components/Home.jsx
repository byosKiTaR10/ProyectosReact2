// Home.js
import React from 'react';
import NavigationMenu from './NavigationMenu';

const Home = ({ loggedIn, userRole, onLogout }) => {
  return (
    <div>
      {loggedIn && <NavigationMenu userRole={userRole} onLogout={onLogout} />}
      <h1>Página de inicio</h1>
      {/* Contenido de la página de inicio */}
    </div>
  );
};

export default Home;
