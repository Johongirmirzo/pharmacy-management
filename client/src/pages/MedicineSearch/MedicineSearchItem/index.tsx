import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../styles/UI/Alert/index.styled";
import {
  MedicineSearchItemSection,
  MedicineSearchItemHeader,
  MedicineSearchItemTitle,
  MedicineSearchItemInput,
  MedicineSearchItemBtn,
} from "./index.styled";
import { MedicineSearchItemProps } from "./index.types";

const MedicineSearchItem = ({
  medicine,
  addMedicineToCart,
}: MedicineSearchItemProps) => {
  const [error, setError] = useState<string[]>([]);

  const [medicineAmount, setMedicineAmount] = useState(0);
  const handleAddToCartClick = () => {
    if (medicineAmount > medicine.totalInStock) {
      setError([
        `Your order exceeded total medicines in stock. There are ${
          medicine.totalInStock > 0 ? medicineAmount - medicine.totalInStock : 0
        } the current medicine left`,
      ]);
    } else if (medicineAmount < 1) {
      setError(["Minimim medicine amount to be added to the cart is 1"]);
    } else {
      addMedicineToCart(medicineAmount);
    }
  };

  const handleUpdateMedicineChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMedicineAmount(Number(e.target.value));
  };
  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  return (
    <MedicineSearchItemSection>
      <MedicineSearchItemHeader>
        <MedicineSearchItemTitle>
          Medicine: {medicine.medicineName}
        </MedicineSearchItemTitle>
      </MedicineSearchItemHeader>
      {error.length > 0 &&
        error.map((err, index) => (
          <Alert key={index}>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              X
            </AlertCancelBtn>
          </Alert>
        ))}

      <Table>
        <Thead>
          <Tr>
            <Th>MEDICAL COMPANY</Th>
            <Th>MEDICINE NAME</Th>
            <Th>MEDICINE BATCH NUMBER</Th>
            <Th>QUANTITY SOLD</Th>
            <Th>REMAINING QUANTITY</Th>
            <Th>BUYING QUANTITY</Th>
            <Th>ACTION</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{medicine.medicalCompanyName}</Td>
            <Td>{medicine.medicineName}</Td>
            <Td>{medicine.batchNumber}</Td>
            <Td>{medicine.quantitySold}</Td>
            <Td>{medicine.totalInStock}</Td>
            <Td>
              <MedicineSearchItemInput
                onChange={handleUpdateMedicineChange}
                value={medicineAmount}
                type="number"
                min="1"
                max="1000"
              />
            </Td>
            <Td>
              <MedicineSearchItemBtn onClick={handleAddToCartClick}>
                Add to Cart
              </MedicineSearchItemBtn>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </MedicineSearchItemSection>
  );
};

export default MedicineSearchItem;
