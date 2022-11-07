import styled from "styled-components";

const MedicineSearchSection = styled.section`
  margin: 30px 0;
`;
const MedicineSearchHeader = styled.header`
  margin-bottom: 30px;
`;
const MedicineSearchTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const MedicineSearchFormBox = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export {
  MedicineSearchSection,
  MedicineSearchHeader,
  MedicineSearchTitle,
  MedicineSearchFormBox,
};
