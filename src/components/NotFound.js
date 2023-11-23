// NotFound.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="mt-5 border 2 p-4">
      <Row>
        <Col>
          <h1>404 - Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="primary">Go Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
