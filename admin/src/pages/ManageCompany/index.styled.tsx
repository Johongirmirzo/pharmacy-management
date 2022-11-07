import styled from "styled-components";

const ManageCompanyBox = styled.section`
  margin: 30px 0;
`;
const ManageCompanyHeader = styled.header`
  margin-bottom: 30px;
`;
const ManageCompanyTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const ManageCompanyPaginationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  ManageCompanyBox,
  ManageCompanyHeader,
  ManageCompanyTitle,
  ManageCompanyPaginationBox,
};
