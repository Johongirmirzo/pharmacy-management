import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import AddCompanyForm from "./AddCompanyForm";
import { Button } from "../../styles/UI/Button/index.styled";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { isDemoMode } from "../../utils/isDemoMode";
import {
  AddCompanyBox,
  AddCompanyHeader,
  AddCompanyTitle,
  AddCompanyFormBox,
} from "./index.styled";

const AddCompany = () => {
  const { email } = useSelector((state: RootState) => state.admin);

  return (
    <AddCompanyBox>
      {!isDemoMode(email) ? (
        <>
          <AddCompanyHeader>
            <Link to="/manageCompany">
              <Button round>
                <HiOutlineBuildingOffice />
                Go Back to All Companies
              </Button>
            </Link>
            <AddCompanyTitle>Add a Company</AddCompanyTitle>
          </AddCompanyHeader>
          <AddCompanyFormBox>
            <AddCompanyForm />
          </AddCompanyFormBox>
        </>
      ) : (
        <AddCompanyHeader>
          <AddCompanyTitle>You can't modify data in demo mode</AddCompanyTitle>
        </AddCompanyHeader>
      )}
    </AddCompanyBox>
  );
};

export default AddCompany;
