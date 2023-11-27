// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../features/authSlice';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';  // Add this import

const Login = () => {
  const { t } = useTranslation();  // Hook to access translations
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Perform API call to authenticate user
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      <h2>{t('login')}</h2>
      <Form>
        <FormGroup>
          <Label for="username">{t('username')}</Label>
          <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="password">{t('password')}</Label>
          <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <Button color="primary" onClick={handleLogin}>
          {t('loginButton')}
        </Button>
      </Form>
      <p className="mt-3">
        {t('notUser')} <Link to="/signup">{t('signupLink')}</Link>?
      </p>
    </Container>
  );
};

export default Login;
