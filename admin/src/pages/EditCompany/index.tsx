import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { Button } from "../../styles/UI/Button/index.styled";
import EditCompanyForm from "./EditCompanyForm";
import {
  EditCompanyBox,
  EditCompanyHeader,
  EditCompanyTitle,
  EditCompanyFormBox,
} from "./index.styled";

const EditCompany = () => {
  return (
    <EditCompanyBox>
      <EditCompanyHeader>
        <Link to="/manageCompany">
          <Button round>
            <HiOutlineBuildingOffice />
            Go Back to All Companies
          </Button>
        </Link>
        <EditCompanyTitle>Edit a Company</EditCompanyTitle>
      </EditCompanyHeader>
      <EditCompanyFormBox>
        <EditCompanyForm />
      </EditCompanyFormBox>
    </EditCompanyBox>
  );
};

export default EditCompany;
