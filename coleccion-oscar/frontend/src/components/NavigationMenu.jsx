// NavigationMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = ({ userRole, onLogout }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {userRole === 'admin' && (
          <li>
            <Link to="/user-management">Gestión de Usuarios</Link>
          </li>
        )}
        {/* Otros enlaces según el rol */}
      </ul>
      <button onClick={onLogout}>Cerrar sesión</button>
    </nav>
  );
};

export default NavigationMenu;
