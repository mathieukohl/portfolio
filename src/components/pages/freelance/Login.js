// Login.js

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const envUsername = process.env.REACT_APP_USERNAME;
  const envPassword = process.env.REACT_APP_PASSWORD;

  console.log('data', username + ' ' + password)

  const handleLogin = () => {
    // Add your authentication logic here
    // For example, you can check if the entered username and password are correct

    // For demonstration purposes, let's assume a simple check
    if (username === envUsername && password === envPassword) {
      onLogin();
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <Form style={{ marginLeft: '100vh', marginRight: '100vh'}}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleLogin}>
        Login
      </Button>
    </Form>
  );
};

export default Login;
