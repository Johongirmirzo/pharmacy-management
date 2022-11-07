import styled from "styled-components";

const AddCompanyBox = styled.section`
  max-width: 960px;
  margin: 30px auto 0 auto;
`;
const AddCompanyHeader = styled.header`
  margin-bottom: 30px;
`;
const AddCompanyTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const AddCompanyFormBox = styled.div`
  padding: 20px;
  background: #fff;
`;

export { AddCompanyBox, AddCompanyHeader, AddCompanyTitle, AddCompanyFormBox };
