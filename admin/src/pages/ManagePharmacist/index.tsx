import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import ManagePharmacistTable from "./ManagePharmacistTable";
import { Button } from "../../styles/UI/Button/index.styled";
import {
  PharmacistSection,
  PharmacistHeader,
  PharmacistTitle,
} from "./index.styled";

const ManagePharmacist = () => {
  return (
    <PharmacistSection>
      <PharmacistHeader>
        <Link to="/addPharmacist">
          <Button round={true}>
            <AiOutlineUserAdd /> Add a New Pharmacist
          </Button>
        </Link>
        <PharmacistTitle>All Pharmacists</PharmacistTitle>
      </PharmacistHeader>
      <ManagePharmacistTable />
    </PharmacistSection>
  );
};

export default ManagePharmacist;
