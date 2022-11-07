import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import {
  editPharmacist as updatePharmacist,
  IPharmacist,
} from "../../../redux/pharmacist";
import { editPharmacist } from "../../../api/pharmacist";
import pharmacistEditSchema from "../../../schemas/pharmacistEditSchema";
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

type EditPharmacistFormProps = {
  pharmacist: IPharmacist;
  pharmacistId?: string;
};

const EditPharmacistForm = ({
  pharmacist,
  pharmacistId,
}: EditPharmacistFormProps) => {
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
          fullname: pharmacist.fullname,
          username: pharmacist.username,
          email: pharmacist.email,
          mobileNumber: pharmacist.mobileNumber,
          gender: pharmacist.gender,
        }}
        onSubmit={(pharmacistData) => {
          console.log(pharmacistData);
          (async () => {
            try {
              setIsLoading(true);
              if (pharmacistId) {
                const pharmacistEditResponse = await editPharmacist(
                  pharmacistData,
                  pharmacistId
                );
                setIsLoading(false);
                dispatch(
                  updatePharmacist({
                    editedPharmacist: {
                      _id: pharmacistEditResponse.data._id,
                      fullname: pharmacistEditResponse.data.fullname,
                      username: pharmacistEditResponse.data.username,
                      email: pharmacistEditResponse.data.email,
                      gender: pharmacistEditResponse.data.gender,
                      mobileNumber: pharmacistEditResponse.data.mobileNumber,
                    },
                  })
                );
                navigate("/managePharmacist");
              }
            } catch (err) {
              setIsLoading(false);
              console.error(err);
            }
          })();
        }}
        validationSchema={pharmacistEditSchema}
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
                  value="MALE"
                  checked={values.gender === "MALE" ? true : false}
                  name="gender"
                />
                Male
              </FormLabel>
              <FormLabel htmlFor="female">
                <FormInput
                  type="radio"
                  id="female"
                  onChange={handleChange}
                  value="FEMALE"
                  checked={values.gender === "FEMALE" ? true : false}
                  name="gender"
                />
                Female
              </FormLabel>
              {errors.gender && touched.gender ? (
                <FormFieldError>{errors.gender}</FormFieldError>
              ) : null}
            </FormControl>
            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Editing Pharmacist..." : "Edit Pharmacist"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditPharmacistForm;
