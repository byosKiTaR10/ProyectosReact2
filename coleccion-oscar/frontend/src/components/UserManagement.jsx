// UserManagement.js
import React, { useState } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const handleUserInsert = (newUser) => {
    // Implementar la lógica para insertar un nuevo usuario en la base de datos
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <UserForm onUserInsert={handleUserInsert} />
      <UserTable users={users} />
    </div>
  );
};

export default UserManagement;
