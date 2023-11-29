// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home';
import UserManagement from './components/UserManagement';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('guest');

  const handleLogin = () => {
    // Implement the authentication logic
    setLoggedIn(true);
    // Get the user role and set it in userRole
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserRole('guest');
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home loggedIn={loggedIn} userRole={userRole} onLogout={handleLogout} />
        </Route>
        <Route path="/user-management">
          {loggedIn && userRole === 'admin' ? (
            <UserManagement />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default App;


