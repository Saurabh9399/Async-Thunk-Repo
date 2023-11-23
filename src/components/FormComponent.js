import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { createUser } from '../features/userDetailsSlice';

const MyFormComponent = () => {
    const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(createUser(formData)); 
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <h2 className="mb-4">Add User Data</h2>
      <Form className="w-75 mx-auto" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="gender">Gender</Label>
          <Input
            type="select"
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            type="number"
            name="age"
            id="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default MyFormComponent;
