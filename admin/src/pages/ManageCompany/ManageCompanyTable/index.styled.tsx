import styled from "styled-components";

const ManageCompanyBtn = styled.button`
  font-size: 18px;
  cursor: pointer;
  & > * {
    color: #ef944a;
  }
`;
const ManageCompanyTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem calc(2.5vw + 1rem), 1.8rem);
`;

export { ManageCompanyBtn, ManageCompanyTitle };
