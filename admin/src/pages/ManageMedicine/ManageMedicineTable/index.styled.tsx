import styled from "styled-components";

const ManageMedicineBtn = styled.button`
  font-size: 18px;
  cursor: pointer;
  & > * {
    color: #ef944a;
  }
`;
const ManageMedicineTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 1.8rem);
`;
const ManageMedicineOutofStock = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: red;
`;

export { ManageMedicineBtn, ManageMedicineTitle, ManageMedicineOutofStock };
