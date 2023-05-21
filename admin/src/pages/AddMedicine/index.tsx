import React from "react";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import AddMedicineForm from "./AddMedicineForm";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { isDemoMode } from "../../utils/isDemoMode";
import { Button } from "../../styles/UI/Button/index.styled";
import {
  AddMedicineSection,
  AddMedicineTitle,
  AddMedicineHeader,
  AddMedicineFormBox,
} from "./index.styled";

const AddMedicine = () => {
  const { email } = useSelector((state: RootState) => state.admin);
  return (
    <AddMedicineSection>
      {!isDemoMode(email) ? (
        <>
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
        </>
      ) : (
        <AddMedicineHeader>
          <AddMedicineTitle>
            You can't modify data in demo mode
          </AddMedicineTitle>
        </AddMedicineHeader>
      )}
    </AddMedicineSection>
  );
};

export default AddMedicine;
