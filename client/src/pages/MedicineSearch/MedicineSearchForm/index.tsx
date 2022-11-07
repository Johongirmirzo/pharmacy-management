import React, { useState } from "react";
import {
  FormInput,
  FormButton,
  FormFieldError,
} from "../../../styles/UI/Form/index.styled";
import { InvoiceSearchFormProps } from "./index.types";

const InvoiceSearchForm = ({ fetchMedicine }: InvoiceSearchFormProps) => {
  const [medicine, setMedicine] = useState("");
  const [error, setError] = useState("");

  const handleSearchMedicineClick = () => {
    if (medicine.trim().length < 1) {
      setError("Medicine name can't be empty!");
    } else {
      fetchMedicine(medicine);
    }
  };

  const handleUpdateMedicineChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMedicine(e.target.value);
    if (medicine.trim().length < 1) {
      setError("Medicine name can't be empty!");
    } else if (medicine.trim().length > 0 && error) {
      setError("");
    }
  };

  return (
    <>
      <FormInput
        type="text"
        name="medicine"
        placeholder="Enter Medicine Name"
        onChange={handleUpdateMedicineChange}
        value={medicine}
      />
      {error && <FormFieldError>{error}</FormFieldError>}
      <FormButton onClick={handleSearchMedicineClick}>
        Search Medicine
      </FormButton>
    </>
  );
};

export default InvoiceSearchForm;
