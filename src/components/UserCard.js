import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserDetailsModal from './UserDetailsModal';
import UserEditModal from './UserEditModal';

const UserCard = ({ user, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState(false);

  const { id, name, gender, age } = user;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  };

  const toggleDeleteConfirmationModal = () => {
    setDeleteConfirmationModalOpen(!deleteConfirmationModalOpen);
  };

  const handleDelete = () => {
    onDelete(user);
    toggleDeleteConfirmationModal();
  };

  return (
    <Container fluid style={{ maxWidth: '100%' }}>
      <Card
        className="mb-4"
        style={{
          backgroundColor: '#f8f9fa',
          padding: '15px',
          margin: '10px auto', // Center the card horizontally
          width: '80%', // Adjust the width as needed
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        onMouseOver={() => {
          document.getElementById(id).style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={() => {
          document.getElementById(id).style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        }}
        id={id}
      >
        <CardBody>
          <CardTitle tag="h5"><strong>Name:</strong> {name}</CardTitle>
          <CardText>
            <strong>Gender:</strong> {gender}<br />
            <strong>Age:</strong> {age}
          </CardText>
          <div className="d-flex justify-content-center flex-wrap">
            <Button color="info" onClick={toggleModal} className="m-1">
              View Details
            </Button>
            <Button color="warning" onClick={toggleEditModal} className='m-1'>
              Edit
            </Button>
            <Button color="danger" onClick={toggleDeleteConfirmationModal} className='m-1'>
              Delete
            </Button>
          </div>
        </CardBody>
      </Card>

      <UserDetailsModal isOpen={isModalOpen} toggle={toggleModal} user={user} />
      <UserEditModal isOpen={editModalOpen} toggle={toggleEditModal} user={user} onSave={onEdit} />

      {/* Delete Confirmation Modal */}
      <Modal isOpen={deleteConfirmationModalOpen} toggle={toggleDeleteConfirmationModal}>
        <ModalHeader toggle={toggleDeleteConfirmationModal}>Delete User</ModalHeader>
        <ModalBody>
          Do you want to delete the user?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleDelete}>Yes</Button>
          <Button color="secondary" onClick={toggleDeleteConfirmationModal}>No</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default UserCard;
