import styled from "styled-components";

const AddMedicineSection = styled.section`
  max-width: 960px;
  margin: 30px auto;
`;
const AddMedicineHeader = styled.header`
  margin-bottom: 30px;
`;
const AddMedicineTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const AddMedicineFormBox = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;
const AddMedicineText = styled.p``;

export {
  AddMedicineSection,
  AddMedicineTitle,
  AddMedicineHeader,
  AddMedicineFormBox,
  AddMedicineText,
};
