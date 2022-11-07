import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import AddCompanyForm from "./AddCompanyForm";
import { Button } from "../../styles/UI/Button/index.styled";
import {
  AddCompanyBox,
  AddCompanyHeader,
  AddCompanyTitle,
  AddCompanyFormBox,
} from "./index.styled";

const AddCompany = () => {
  return (
    <AddCompanyBox>
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
    </AddCompanyBox>
  );
};

export default AddCompany;
