import styled from "styled-components";

const MedicineInventorySection = styled.section`
  margin: 30px 0;
`;
const MedicineInventoryHeader = styled.header`
  margin-bottom: 30px;
`;
const MedicineInventoryTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;

export {
  MedicineInventorySection,
  MedicineInventoryHeader,
  MedicineInventoryTitle,
};
