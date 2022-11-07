import React, { useState, useEffect } from "react";
import { BsPeople } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { IPharmacist } from "../../redux/pharmacist";
import { getPharmacist } from "../../api/pharmacist";
import EditPharmacistForm from "./EditPharmacistForm";
import { Button } from "../../styles/UI/Button/index.styled";
import {
  EditPharmacistSection,
  EditPharmacistTitle,
  EditPharmacistHeader,
  EditPharmacistFormBox,
} from "./index.styled";

const EditPharmacist = () => {
  const { pharmacistId } = useParams();
  const [pharmacist, setPharmacist] = useState({} as IPharmacist);

  useEffect(() => {
    fetchPharmacist();
  }, [pharmacistId]);

  const fetchPharmacist = async () => {
    try {
      if (pharmacistId) {
        const pharmacistResponse = await getPharmacist(pharmacistId);
        setPharmacist(pharmacistResponse.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log("Edit Pharmacist", pharmacist);
  return (
    <EditPharmacistSection>
      <EditPharmacistHeader>
        <Link to="/managePharmacist">
          <Button round={true}>
            <BsPeople /> Go Back to Pharmacists
          </Button>
        </Link>
        <EditPharmacistTitle>Edit a Pharmacist</EditPharmacistTitle>
      </EditPharmacistHeader>
      {Object.keys(pharmacist).length > 0 && (
        <EditPharmacistFormBox>
          <EditPharmacistForm
            pharmacistId={pharmacistId}
            pharmacist={pharmacist}
          />
        </EditPharmacistFormBox>
      )}
    </EditPharmacistSection>
  );
};

export default EditPharmacist;
