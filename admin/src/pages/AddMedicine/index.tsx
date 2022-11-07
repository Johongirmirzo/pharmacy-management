import React from "react";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import AddMedicineForm from "./AddMedicineForm";
import { Button } from "../../styles/UI/Button/index.styled";
import {
  AddMedicineSection,
  AddMedicineTitle,
  AddMedicineHeader,
  AddMedicineFormBox,
} from "./index.styled";

const AddMedicine = () => {
  return (
    <AddMedicineSection>
      <AddMedicineHeader>
        <Link to="/manageMedicine">
          <Button round>
            <BsPeople /> Go Back to Medicines
          </Button>
        </Link>
        <AddMedicineTitle>Add a Medicine</AddMedicineTitle>
      </AddMedicineHeader>
      <AddMedicineFormBox>
        <AddMedicineForm />
      </AddMedicineFormBox>
    </AddMedicineSection>
  );
};

export default AddMedicine;
