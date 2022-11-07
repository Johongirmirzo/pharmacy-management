import styled from "styled-components";

const EditMedicineSection = styled.section`
  max-width: 960px;
  margin: 30px auto;
`;
const EditMedicineHeader = styled.header`
  margin-bottom: 30px;
`;
const EditMedicineTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const EditMedicineFormBox = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;
const EditMedicineText = styled.p``;

export {
  EditMedicineSection,
  EditMedicineTitle,
  EditMedicineHeader,
  EditMedicineFormBox,
  EditMedicineText,
};
