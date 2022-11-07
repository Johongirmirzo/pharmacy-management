import styled from "styled-components";

const SaleReportsSection = styled.section`
  margin: 30px 0;
`;
const SaleReportsHeader = styled.header`
  margin-bottom: 30px;
`;
const SaleReportsTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const SaleReportsDateBox = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 20px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;
const SaleReportsResult = styled.section``;

export {
  SaleReportsSection,
  SaleReportsHeader,
  SaleReportsTitle,
  SaleReportsDateBox,
  SaleReportsResult,
};
