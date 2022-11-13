import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { changeProfile as changePharmacistProfile } from "../../../redux/pharmacist";
import { Formik } from "formik";
import pharmacistProfileSchema from "../../../schemas/pharmacistProfileSchema";
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
import { IPharmacistProfile } from "./index.types";
import { changeProfile } from "../../../api/pharmacist";

const ChangeProfileForm = () => {
  const dispatch = useDispatch();
  const { pharmacistId, fullname, username, email, mobileNumber } = useSelector(
    (state: RootState) => state.pharmacist
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const updatePharmacistProfile = async (profileData: IPharmacistProfile) => {
    try {
      setIsLoading(true);
      const pharmacistProfileResponse = await changeProfile(
        profileData,
        pharmacistId
      );

      console.log("Pharmacist Response", pharmacistProfileResponse.data);

      dispatch(
        changePharmacistProfile({ pharmacist: pharmacistProfileResponse.data })
      );
      console.log("Pharmacist Response", pharmacistProfileResponse);
      setError(["Your profile is changed!"]);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError(["Something went wrong! Please try again later!"]);
      setIsLoading(false);
    }
  };

  const isDemoMode = (email: string) => email === "pharmacist.demo@gmail.com";

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  return (
    <>
      {error &&
        error.map((err, index) => (
          <Alert success={error}>
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
          updatePharmacistProfile(profileData);
        }}
        validationSchema={pharmacistProfileSchema}
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
            {isDemoMode(email) ? null : (
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
            )}
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
