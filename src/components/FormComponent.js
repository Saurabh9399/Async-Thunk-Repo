import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { createUser } from '../features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const MyFormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    gender: Yup.string().required('Gender is required'),
    age: Yup.number().required('Age is required').positive('Age must be a positive number'),
  });

  const initialValues = {
    name: '',
    gender: '',
    age: '',
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    dispatch(createUser(values));
    setSubmitting(false);
    navigate('/users');
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <h2 className="mb-4">Add User Data</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className="w-75 mx-auto">
            <FormGroup>
              <Label for="name">Name</Label>
              <Field type="text" name="name" id="name" as={Input} placeholder="Enter your name" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </FormGroup>

            <FormGroup>
              <Label for="gender">Gender</Label>
              <Field type="select" name="gender" id="gender" as={Input}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="text-danger" />
            </FormGroup>

            <FormGroup>
              <Label for="age">Age</Label>
              <Field type="number" name="age" id="age" as={Input} placeholder="Enter your age" />
              <ErrorMessage name="age" component="div" className="text-danger" />
            </FormGroup>

            <Button color="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default MyFormComponent;
