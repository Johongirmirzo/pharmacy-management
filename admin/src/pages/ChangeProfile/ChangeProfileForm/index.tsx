import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { changeProfile as changeAdminProfile } from "../../../redux/admin";
import adminProfileSchema from "../../../schemas/adminProfileSchema";
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
import { changeProfile } from "../../../api/pharmacist";
import { IAdminProfile } from "./index.types";

const ChangeProfileForm = () => {
  const dispatch = useDispatch();
  const { adminId, fullname, username, email, mobileNumber } = useSelector(
    (state: RootState) => state.admin
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const updateAdminProfile = async (profileData: IAdminProfile) => {
    try {
      setIsLoading(true);
      const adminProfileResponse = await changeProfile(profileData, adminId);
      const admin = {
        fullname: adminProfileResponse.data.fullname,
        username: adminProfileResponse.data.username,
        email: adminProfileResponse.data.email,
        mobileNumber: adminProfileResponse.data.mobileNumber,
      };
      dispatch(changeAdminProfile({ ...admin }));
      setError(["Your profile is changed!"]);
      setIsLoading(false);
    } catch (err) {
      setError(["Something went wrong! Please try again later!"]);
      setIsLoading(false);
    }
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };
  return (
    <>
      {" "}
      {error &&
        error.map((err, index) => (
          <Alert>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              X
            </AlertCancelBtn>
          </Alert>
        ))}
      <Formik
        initialValues={{
          fullname,
          username,
          email,
          mobileNumber,
        }}
        onSubmit={(profileData) => {
          updateAdminProfile(profileData);
        }}
        validationSchema={adminProfileSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="fullname">Full Name</FormLabel>
              <FormInput
                type="text"
                id="fullname"
                placeholder="Enter Full Name"
                name="fullname"
                onChange={handleChange}
                value={values.fullname}
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
                placeholder="Enter Username"
                name="username"
                onChange={handleChange}
                value={values.username}
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
                placeholder="Enter Email"
                name="email"
                onChange={handleChange}
                value={values.email}
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
                placeholder="Enter Mobile Number"
                name="mobileNumber"
                onChange={handleChange}
                value={values.mobileNumber}
              />
              {errors.mobileNumber && touched.mobileNumber ? (
                <FormFieldError>{errors.mobileNumber}</FormFieldError>
              ) : null}
            </FormControl>
            <FormButton
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Updating Profile..." : "Update Profile"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChangeProfileForm;
