import React from "react";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import AddPharmacistForm from "./AddPharmacistForm";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { isDemoMode } from "../../utils/isDemoMode";
import { Button } from "../../styles/UI/Button/index.styled";
import {
  AddPharmacistSection,
  AddPharmacistTitle,
  AddPharmacistHeader,
  AddPharmacistFormBox,
} from "./index.styled";

const AddPharmacist = () => {
  const { email } = useSelector((state: RootState) => state.admin);

  return (
    <AddPharmacistSection>
      {!isDemoMode(email) ? (
        <>
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
        </>
      ) : (
        <AddPharmacistHeader>
          <AddPharmacistTitle>
            You can't modify data in demo mode
          </AddPharmacistTitle>
        </AddPharmacistHeader>
      )}
    </AddPharmacistSection>
  );
};

export default AddPharmacist;
