import styled from "styled-components";
import { Link } from "react-router-dom";

const AddPharmacistSection = styled.section`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 20px;
`;
const AddPharmacistHeader = styled.header`
  margin-bottom: 30px;
`;
const AddPharmacistTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const AddPharmacistFormBox = styled.div`
  margin-top: 30px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  background: #fff;
`;

export {
  AddPharmacistSection,
  AddPharmacistHeader,
  AddPharmacistTitle,
  AddPharmacistFormBox,
};
