import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { addToCart } from "../../redux/cart";
import { addItemToCart } from "../../api/cart";
import MedicineSearchForm from "./MedicineSearchForm";
import MedicineSearchItem from "./MedicineSearchItem";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../styles/UI/Alert/index.styled";
import {
  MedicineSearchSection,
  MedicineSearchHeader,
  MedicineSearchTitle,
  MedicineSearchFormBox,
} from "./index.styled";
import { IMedicine } from "../../redux/medicine";

const MedicineSearch = () => {
  const medicines = useSelector((state: RootState) => state.medicine.medicines);
  const pharmacistId = useSelector(
    (state: RootState) => state.pharmacist.pharmacistId
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState({} as IMedicine);
  const [error, setError] = useState<string[]>([]);

  const fetchMedicine = (medicineName: string) => {
    const medicine = medicines.find(
      (medicine) =>
        medicine.medicineName.toLowerCase() === medicineName.toLowerCase()
    );

    if (medicine) {
      setMedicine(medicine);
    } else {
      setError(["Current medicine does not exist! Please type valid medicine"]);
    }
  };

  const addMedicineToCart = async (medicineAmount: number) => {
    try {
      const cartItem = {
        medicineId: medicine._id,
        companyName: medicine.medicalCompanyName,
        medicineName: medicine.medicineName,
        batchNumber: medicine.batchNumber,
        quantity: medicineAmount,
        price: medicine.price,
      };
      const cartItemResponse = await addItemToCart(cartItem, pharmacistId);
      console.log("Cart Item Response", cartItemResponse);
      dispatch(addToCart({ newCartItem: cartItemResponse.data }));
      navigate("/cart");
    } catch (err) {
      console.error(err);
    }
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  return (
    <MedicineSearchSection>
      <MedicineSearchHeader>
        <MedicineSearchTitle>Search Medicines</MedicineSearchTitle>
      </MedicineSearchHeader>
      <MedicineSearchFormBox>
        {error.length > 0 &&
          error.map((err, index) => (
            <Alert>
              <AlertText>{err}</AlertText>
              <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
                X
              </AlertCancelBtn>
            </Alert>
          ))}
        <MedicineSearchForm fetchMedicine={fetchMedicine} />
      </MedicineSearchFormBox>
      {Object.keys(medicine).length > 0 && (
        <MedicineSearchItem
          medicine={medicine}
          addMedicineToCart={addMedicineToCart}
        />
      )}
    </MedicineSearchSection>
  );
};

export default MedicineSearch;
