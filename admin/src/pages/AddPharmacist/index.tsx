import React from "react";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import AddPharmacistForm from "./AddPharmacistForm";
import { Button } from "../../styles/UI/Button/index.styled";
import {
  AddPharmacistSection,
  AddPharmacistTitle,
  AddPharmacistHeader,
  AddPharmacistFormBox,
} from "./index.styled";

const AddPharmacist = () => {
  return (
    <AddPharmacistSection>
      <AddPharmacistHeader>
        <Link to="/managePharmacist">
          <Button round>
            <BsPeople /> Go Back to Pharmacists
          </Button>
        </Link>
        <AddPharmacistTitle>Add a Pharmacist</AddPharmacistTitle>
      </AddPharmacistHeader>
      <AddPharmacistFormBox>
        <AddPharmacistForm />
      </AddPharmacistFormBox>
    </AddPharmacistSection>
  );
};

export default AddPharmacist;
