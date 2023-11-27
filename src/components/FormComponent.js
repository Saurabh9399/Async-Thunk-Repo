import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Label, Input, Button, Container } from "reactstrap";
import { createUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const MyFormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('name_req')),
    gender: Yup.string().required(t('gender_req')),
    age: Yup.number()
      .required(t('age_req'))
      .positive(t("age_positive")),
  });

  const initialValues = {
    name: "",
    gender: "",
    age: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    dispatch(createUser(values));
    setSubmitting(false);
    navigate("/users");
  };

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <h2 className="mb-4">{t("add_user_data")}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-75 mx-auto">
            <FormGroup>
              <Label for="name">{t("name")}</Label>
              <Field
                type="text"
                name="name"
                id="name"
                as={Input}
                placeholder={t('enter_your_name')}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </FormGroup>

            <FormGroup>
              <Label for="gender">{t("gender")}</Label>
              <Field type="select" name="gender" id="gender" as={Input}>
                <option value="">{t('select_gender')}</option>
                <option value="male">{t('male')}</option>
                <option value="female">{t('female')}</option>
                <option value="others">{t('others')}</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-danger"
              />
            </FormGroup>

            <FormGroup>
              <Label for="age">{t("age")}</Label>
              <Field
                type="number"
                name="age"
                id="age"
                as={Input}
                placeholder={t('enter_your_age')}
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-danger"
              />
            </FormGroup>

            <Button color="primary" type="submit" disabled={isSubmitting}>
              {t('submit')}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default MyFormComponent;
