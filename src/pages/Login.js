// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/authSlice';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Perform API call to authenticate user
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(login({ user: { username }, token: data.token }));
      navigate('/'); // Redirect to your dashboard or protected route
    } else {
      console.error('Login failed');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <Button color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
