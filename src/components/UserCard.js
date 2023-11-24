import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Container } from 'reactstrap';
import UserDetailsModal from './UserDetailsModal';
import UserEditModal from './UserEditModal';

const UserCard = ({ user, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const { name, gender, age } = user;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  }

  return (
    <Container style={{ maxWidth: '50%' }}>
      <Card
        className="mb-4"
        style={{
          backgroundColor: '#f8f9fa',
          padding: '15px',
          margin: '10px 0',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        onMouseOver={() => {
          // Add a hover effect
          document.getElementById(user.id).style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={() => {
          // Reset the box shadow on mouse out
          document.getElementById(user.id).style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        }}
        id={user.id}
      >
        <CardBody>
          <CardTitle tag="h5"><strong>Name:</strong> {name}</CardTitle>
          <CardText>
            <strong>Gender:</strong> {gender}<br />
            <strong>Age:</strong> {age}
          </CardText>
          <div className="d-flex justify-content-end">
            <Button color="info" onClick={toggleModal}>
              View Details
            </Button>
            <Button color="warning" onClick={toggleEditModal} className='mx-2'>
              Edit
            </Button>
            <Button color="danger" onClick={() => onDelete(user)}>
              Delete
            </Button>
          </div>
        </CardBody>
      </Card>
      <UserDetailsModal isOpen={isModalOpen} toggle={toggleModal} user={user} />
      <UserEditModal isOpen={editModalOpen} toggle={toggleEditModal} user={user} onSave={onEdit}/>
    </Container>
  );
};

export default UserCard;
