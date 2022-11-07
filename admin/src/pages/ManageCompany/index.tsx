import React from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Button } from "../../styles/UI/Button/index.styled";
import ManageCompanyTable from "./ManageCompanyTable";
import {
  ManageCompanyBox,
  ManageCompanyHeader,
  ManageCompanyTitle,
} from "./index.styled";

const ManageCompany = () => {
  return (
    <ManageCompanyBox>
      <ManageCompanyHeader>
        <Link to="/addCompany">
          <Button round>
            <HiOutlineBuildingOffice />
            Add a New Company
          </Button>
        </Link>
        <ManageCompanyTitle>Medical Companies</ManageCompanyTitle>
      </ManageCompanyHeader>
      <ManageCompanyTable />
    </ManageCompanyBox>
  );
};

export default ManageCompany;
