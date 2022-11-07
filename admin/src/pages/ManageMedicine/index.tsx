import React from "react";
import { GiMedicines } from "react-icons/gi";
import { Link } from "react-router-dom";
import ManageMedicineTable from "./ManageMedicineTable";
import { Button } from "../../styles/UI/Button/index.styled";
import {
  ManageMedicineBox,
  ManageMedicineHeader,
  ManageMedicineTitle,
} from "./index.styled";

const ManageMedicine = () => {
  return (
    <ManageMedicineBox>
      <ManageMedicineHeader>
        <Link to="/addMedicine">
          <Button round>
            <GiMedicines />
            Add a New Medicine
          </Button>
        </Link>
        <ManageMedicineTitle>All Medicines</ManageMedicineTitle>
      </ManageMedicineHeader>
      <ManageMedicineTable />
    </ManageMedicineBox>
  );
};

export default ManageMedicine;
