// UserDetailsModal.js
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import "./UserDetailsModal.css"

const UserDetailsModal = ({ isOpen, toggle, user }) => {
  const { name, gender, age } = user;

  // Assuming 'name' is a string in the format "First Last"
  const firstName = name.split(' ')[0];

  return (
    <Modal isOpen={isOpen} toggle={toggle} >
      <ModalHeader toggle={toggle}>{firstName}'s Details</ModalHeader>
      <ModalBody>
        <p><strong>Name:</strong> {firstName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Age:</strong> {age}</p>
        {/* Add more details as needed */}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UserDetailsModal;
