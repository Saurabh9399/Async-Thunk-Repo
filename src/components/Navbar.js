import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand as={Link}>Async Thunk</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/users">Users</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
