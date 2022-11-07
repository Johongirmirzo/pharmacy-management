import React, { useState, useEffect } from "react";
import { BsPeople } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { getMedicine } from "../../api/medicine";
import EditMedicineForm from "./EditMedicineForm";
import { Button } from "../../styles/UI/Button/index.styled";
import {
  EditMedicineSection,
  EditMedicineTitle,
  EditMedicineHeader,
  EditMedicineFormBox,
} from "./index.styled";
import { IMedicine } from "../../redux/medicine";

const EditMedicine = () => {
  const { medicineId } = useParams();
  const [medicine, setMedicine] = useState({} as IMedicine);

  useEffect(() => {
    fetchMedicine();
  }, [medicineId]);

  const fetchMedicine = async () => {
    try {
      if (medicineId) {
        const medicineResponse = await getMedicine(medicineId);
        setMedicine(medicineResponse.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <EditMedicineSection>
      <EditMedicineHeader>
        <Link to="/manageMedicine">
          <Button round>
            <BsPeople /> Go Back to Medicines
          </Button>
        </Link>
        <EditMedicineTitle>Edit a Medicine</EditMedicineTitle>
      </EditMedicineHeader>
      {Object.keys(medicine).length > 0 && (
        <EditMedicineFormBox>
          <EditMedicineForm medicine={medicine} />
        </EditMedicineFormBox>
      )}
    </EditMedicineSection>
  );
};

export default EditMedicine;
