import React, { useState } from "react";
import { Formik } from "formik";
import customerSchema from "../../../schemas/customerSchema";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormFieldError,
  FormButton,
} from "../../../styles/UI/Form/index.styled";
import {
  CustomerInfoFormBox,
  CustomerInfoFormHeader,
  CustomerInfoFormTitle,
  CustomerInfoCheckbox,
} from "./index.styled";
import { CustomerInfoFormProps } from "./index.types";

const CustomerInfoForm = ({
  orderMedicine,
  isLoading,
}: CustomerInfoFormProps) => {
  return (
    <CustomerInfoFormBox>
      <CustomerInfoFormHeader>
        <CustomerInfoFormTitle>Order Medicines</CustomerInfoFormTitle>
      </CustomerInfoFormHeader>
      <Formik
        initialValues={{
          customerName: "",
          customerMobileNumber: "",
          customerPayMode: "",
        }}
        onSubmit={(customerInfo) => {
          orderMedicine(customerInfo);
        }}
        validationSchema={customerSchema}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="customerName">Customer Name</FormLabel>
              <FormInput
                onChange={handleChange}
                value={values.customerName}
                type="text"
                id="customerName"
                name="customerName"
                placeholder="Enter Customer Name"
              />
              {errors.customerName && touched.customerName ? (
                <FormFieldError>{errors.customerName}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="customerMobileNumber">
                Mobile Number{" "}
              </FormLabel>
              <FormInput
                onChange={handleChange}
                value={values.customerMobileNumber}
                type="text"
                id="customerMobileNumber"
                name="customerMobileNumber"
                placeholder="Enter Mobile Number"
              />
              {errors.customerMobileNumber && touched.customerMobileNumber ? (
                <FormFieldError>{errors.customerMobileNumber}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="cash">
                Cash
                <CustomerInfoCheckbox
                  onChange={handleChange}
                  value="cash"
                  type="radio"
                  name="customerPayMode"
                  id="cash"
                />
              </FormLabel>
              <FormLabel htmlFor="card">
                Card
                <CustomerInfoCheckbox
                  onChange={handleChange}
                  value="card"
                  type="radio"
                  name="customerPayMode"
                  id="card"
                />
              </FormLabel>
              {errors.customerPayMode && touched.customerPayMode ? (
                <FormFieldError>{errors.customerPayMode}</FormFieldError>
              ) : null}
            </FormControl>
            <FormButton
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Creating Order..." : "Create Order"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </CustomerInfoFormBox>
  );
};

export default CustomerInfoForm;
