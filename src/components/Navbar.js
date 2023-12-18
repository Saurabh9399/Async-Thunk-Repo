import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/authSlice';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const MyNavbar = () => {
  const dispatch = useDispatch();
  const isAuthenticatedState = useSelector(store => store.auth.isAuthenticated);
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logout());
    console.log('Logout button clicked');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/home">{t('user_manag')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {isAuthenticatedState && (
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">{t('home')}</Nav.Link>
              <Nav.Link as={Link} to="/users">{t('users')}</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">{t('dashboard')}</Nav.Link>
            </Nav>
          )}
          <Nav className="ms-auto"> {/* Added ms-auto for right alignment */}
            {isAuthenticatedState && (
              <Button
                variant="outline-light"
                onClick={handleLogout}
                className='me-2'  // Added Bootstrap margin class
                style={{ width: '120px' }}
              >
                {t('logout')}
              </Button>
            )}
            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
