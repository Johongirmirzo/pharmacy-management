import styled from "styled-components";

const ManagePharmacistBtn = styled.button`
  font-size: 18px;
  cursor: pointer;
  & > * {
    color: #ef944a;
  }
`;
const ManagePharmacistTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 1.8rem);
`;

export { ManagePharmacistBtn, ManagePharmacistTitle };
