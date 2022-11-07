import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { createPharmacist as addPharmacist } from "../../../redux/pharmacist";
import { createPharmacist } from "../../../api/pharmacist";
import pharmacistRegisterSchema from "../../../schemas/createPharmacistSchema";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
} from "../../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../styles/UI/Alert/index.styled";

const AddPharmacistForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const closeAlertMessage = (index: number) => {
    setErrors(errors.filter((err, i) => i !== index));
  };

  return (
    <>
      {errors &&
        errors.map((err, index) => (
          <Alert>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              X
            </AlertCancelBtn>
          </Alert>
        ))}
      <Formik
        initialValues={{
          fullname: "",
          username: "",
          email: "",
          mobileNumber: "",
          gender: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(pharmacistData) => {
          (async () => {
            try {
              setIsLoading(true);
              const pharmacistResponse = await createPharmacist(pharmacistData);
              setIsLoading(false);
              dispatch(addPharmacist({ pharmacist: pharmacistResponse.data }));
              navigate("/managePharmacist");
            } catch (err) {
              setIsLoading(false);
              console.error(err);
            }
          })();
        }}
        validationSchema={pharmacistRegisterSchema}
      >
        {({ errors, touched, handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="fullname">Full Name</FormLabel>
              <FormInput
                type="text"
                id="fullname"
                name="fullname"
                onChange={handleChange}
                value={values.fullname}
                placeholder="Enter Full Name"
              />
              {errors.fullname && touched.fullname ? (
                <FormFieldError>{errors.fullname}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormInput
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                value={values.username}
                placeholder="Enter Username"
              />
              {errors.username && touched.username ? (
                <FormFieldError>{errors.username}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Enter Email"
              />
              {errors.email && touched.email ? (
                <FormFieldError>{errors.email}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="mobileNumber">Mobile Number</FormLabel>
              <FormInput
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                onChange={handleChange}
                value={values.mobileNumber}
                placeholder="Enter Mobile Number"
              />
              {errors.mobileNumber && touched.mobileNumber ? (
                <FormFieldError>{errors.mobileNumber}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                placeholder="Enter Password"
              />
              {errors.password && touched.password ? (
                <FormFieldError>{errors.password}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="mobileNumber">Confirm Password</FormLabel>
              <FormInput
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
                placeholder="Enter Confirm Password"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <FormFieldError>{errors.confirmPassword}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <p
                style={{
                  marginBottom: "10px",
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                Choose A Gender
              </p>
              <FormLabel htmlFor="male" style={{ marginRight: "20px" }}>
                <FormInput
                  type="radio"
                  id="male"
                  onChange={handleChange}
                  value="male"
                  name="gender"
                />
                Male
              </FormLabel>
              <FormLabel htmlFor="female">
                <FormInput
                  type="radio"
                  id="female"
                  onChange={handleChange}
                  value="female"
                  name="gender"
                />
                Female
              </FormLabel>
              {errors.gender && touched.gender ? (
                <FormFieldError>{errors.gender}</FormFieldError>
              ) : null}
            </FormControl>
            <FormButton
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Adding Pharmacist..." : "Add Pharmacist"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddPharmacistForm;
