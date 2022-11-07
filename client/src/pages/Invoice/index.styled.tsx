import styled from "styled-components";

const InvoiceSection = styled.section`
  margin: 30px 0;
  & table:first-of-type {
    margin-bottom: 50px;
  }
`;
const InvoiceHeader = styled.header`
  margin-bottom: 30px;
`;
const InvoiceTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const PrintInvoiceBtnsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
`;
const InvoiceTableBox = styled.div``;

export {
  InvoiceSection,
  InvoiceHeader,
  InvoiceTitle,
  PrintInvoiceBtnsBox,
  InvoiceTableBox,
};
