import styled from "styled-components";

const EditPharmacistSection = styled.section`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 20px;
`;
const EditPharmacistHeader = styled.header`
  margin-bottom: 30px;
`;
const EditPharmacistTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const EditPharmacistFormBox = styled.div`
  margin-top: 30px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  background: #fff;
`;

export {
  EditPharmacistSection,
  EditPharmacistHeader,
  EditPharmacistTitle,
  EditPharmacistFormBox,
};
