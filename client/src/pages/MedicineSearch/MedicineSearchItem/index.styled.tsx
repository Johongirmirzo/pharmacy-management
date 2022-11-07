import styled from "styled-components";

const MedicineSearchItemSection = styled.section``;
const MedicineSearchItemHeader = styled.header`
  margin-top: 50px;
  margin-bottom: 30px;
`;
const MedicineSearchItemTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 1.8rem);
`;
const MedicineSearchItemInput = styled.input`
  width: 60px;
  height: 30px;
  padding-left: 5px;
`;
const MedicineSearchItemBtn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background: #2357b9;
  color: #fff;
  font-size: 15px;
  font-weight: 600px;
  cursor: pointer;
`;

export {
  MedicineSearchItemSection,
  MedicineSearchItemHeader,
  MedicineSearchItemTitle,
  MedicineSearchItemInput,
  MedicineSearchItemBtn,
};
