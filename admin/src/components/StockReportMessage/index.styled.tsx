import styled from "styled-components";

const StockReportHeader = styled.header`
  margin-bottom: 30px;
`;
const StockReportMessageTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 1.8rem);
`;

export { StockReportHeader, StockReportMessageTitle };
