// Signup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../features/authSlice';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';  // Add this import

const Signup = () => {
  const { t } = useTranslation();  // Hook to access translations
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // Perform API call to register user
    try {
      const response = await fetch('http://localhost:3001/api/signup', {
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
        const errorData = await response.json();
        console.error(`Signup failed: ${errorData.error}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      <h2>{t('signup')}</h2>
      <Form>
        <FormGroup>
          <Label for="username">{t('username')}</Label>
          <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="password">{t('password')}</Label>
          <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <Button color="primary" onClick={handleSignup}>
          {t('signupButton')}
        </Button>
      </Form>
      <p className="mt-3">
        {t('ifUser')} <Link to="/login">{t('loginLink')}</Link>?
      </p>
    </Container>
  );
};

export default Signup;
