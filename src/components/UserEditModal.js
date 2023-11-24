// UserEditModal.js
import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const UserEditModal = ({ isOpen, toggle, user, onSave }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedUser);
    toggle();
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className={isOpen ? "zoom-in" : "zoom-out"}
    >
      <ModalHeader toggle={toggle}>Edit {user.name}'s Details</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="editName">Name</Label>
            <Input
              type="text"
              name="name"
              id="editName"
              value={editedUser.name}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="editGender">Gender</Label>
            <Input
              type="select"
              name="gender"
              id="editGender"
              value={editedUser.gender}
              onChange={handleInputChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="editAge">Age</Label>
            <Input
              type="text"
              name="age"
              id="editAge"
              value={editedUser.age}
              onChange={handleInputChange}
            />
          </FormGroup>
          {/* Add more form fields as needed */}
        </Form>
      </ModalBody>
      <ModalFooter className="justify-content-end">
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
        <Button color="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UserEditModal;
