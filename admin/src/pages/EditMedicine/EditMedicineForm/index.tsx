import React, { useState, useEffect } from "react";
import { BsPeople } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { editMedicine as updateMedicine } from "../../../redux/medicine";
import { getMedicine, editMedicine } from "../../../api/medicine";
import editMedicineSchema from "../../../schemas/editMedicineSchema";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormSelect,
  FormButton,
  FormFieldError,
} from "../../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../styles/UI/Alert/index.styled";
import { IMedicine } from "../../../redux/medicine";

type EditMedicineFormProps = {
  medicine: IMedicine;
};

const EditMedicineForm = ({ medicine }: EditMedicineFormProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { medicineId } = useParams();
  const companies = useSelector((state: RootState) => state.company.companies);
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
          medicalCompanyId: medicine.medicalCompanyId,
          medicineName: medicine.medicineName,
          batchNumber: medicine.batchNumber,
          releaseDate: moment(medicine.releaseDate).format("yyyy-MM-DD"),
          expireDate: moment(medicine.expireDate).format("yyyy-MM-DD"),
          totalInStock: medicine.totalInStock,
          price: medicine.price,
        }}
        onSubmit={(medicineData) => {
          console.log(medicineData);
          (async () => {
            try {
              setIsLoading(true);
              if (medicineId) {
                const medicineResponse = await editMedicine(
                  medicineData,
                  medicineId
                );
                console.log(medicineResponse);
                setIsLoading(false);
                dispatch(
                  updateMedicine({ editedMedicine: medicineResponse.data })
                );
                navigate("/manageMedicine");
              }
            } catch (err) {
              setIsLoading(false);
              console.error(err);
            }
          })();
        }}
        validationSchema={editMedicineSchema}
      >
        {({ errors, touched, handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="medicalCompanyId">
                Medical Company Name
              </FormLabel>
              <FormSelect
                id="medicalCompanyId"
                name="medicalCompanyId"
                onChange={handleChange}
                value={values.medicalCompanyId}
              >
                {companies.map((company) => (
                  <option key={company._id} value={company._id}>
                    {company.name}
                  </option>
                ))}
              </FormSelect>
              {errors.medicalCompanyId && touched.medicalCompanyId ? (
                <FormFieldError>{errors.medicalCompanyId}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="medicineName">Medicine Name</FormLabel>
              <FormInput
                type="text"
                id="medicineName"
                name="medicineName"
                onChange={handleChange}
                value={values.medicineName}
                placeholder="Enter Medicine Name"
              />
              {errors.medicineName && touched.medicineName ? (
                <FormFieldError>{errors.medicineName}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="batchNumber">Batch Number</FormLabel>
              <FormInput
                type="batchNumber"
                id="batchNumber"
                name="batchNumber"
                onChange={handleChange}
                value={values.batchNumber}
                placeholder="Enter Batch Number"
              />
              {errors.batchNumber && touched.batchNumber ? (
                <FormFieldError>{errors.batchNumber}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="releaseDate">Release Date</FormLabel>
              <FormInput
                type="date"
                id="releaseDate"
                name="releaseDate"
                onChange={handleChange}
                value={values.releaseDate}
                placeholder="Enter Release Date"
              />
              {errors.releaseDate && touched.releaseDate ? (
                <FormFieldError>{errors.releaseDate}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="expireDate">Expire Date</FormLabel>
              <FormInput
                type="date"
                id="expireDate"
                name="expireDate"
                onChange={handleChange}
                value={values.expireDate}
                placeholder="Enter Expire Date"
              />
              {errors.expireDate && touched.expireDate ? (
                <FormFieldError>{errors.expireDate}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="totalInStock">Medicine Quantity</FormLabel>
              <FormInput
                type="number"
                min="1"
                max="100000"
                id="totalInStock"
                name="totalInStock"
                onChange={handleChange}
                value={values.totalInStock}
                placeholder="Enter Medicine Quantity"
              />
              {errors.totalInStock && touched.totalInStock ? (
                <FormFieldError>{errors.totalInStock}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="price">Medicine Price</FormLabel>
              <FormInput
                type="number"
                min="1"
                max="100000"
                id="price"
                name="price"
                onChange={handleChange}
                value={values.price}
                placeholder="Enter Medicine Price"
              />
              {errors.price && touched.price ? (
                <FormFieldError>{errors.price}</FormFieldError>
              ) : null}
            </FormControl>
            <FormButton
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Editing Medicine..." : "Edit Medicine"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditMedicineForm;
