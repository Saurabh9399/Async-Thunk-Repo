import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/authSlice';

const MyNavbar = () => {
  const dispatch = useDispatch();
  const isAuthenticatedState = useSelector(store => store.auth.isAuthenticated);
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear the authentication token, redirect to the login page, etc.
    dispatch(logout());
    console.log('Logout button clicked');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Async Thunk</Navbar.Brand>
       {isAuthenticatedState && <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/users">Users</Nav.Link>
        </Nav>}
        <Nav>
        {isAuthenticatedState && <Button variant="outline-light" onClick={handleLogout}>Logout</Button>}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
