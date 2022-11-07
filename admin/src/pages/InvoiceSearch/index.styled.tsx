import styled from "styled-components";

const InvoiceSearchSection = styled.section`
  margin: 30px 0;
`;
const InvoiceSearchHeader = styled.header`
  margin-bottom: 30px;
`;
const InvoiceSearchTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const InvoiceSearchBox = styled.div`
  max-width: 960px;
  margin: 30px auto 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const InvoiceSearchResult = styled.section`
  margin: 20px 0;
`;
const InvoiceSearchResultHeader = styled.header`
  margin: 50px 0 20px 0;
`;
const InvoiceSearchResultTitle = styled.h3`
  font-size: clamp(1.5rem, calc(2vw + 1rem), 1.8rem);
  text-align: center;
`;

const InvoiceSearchCustomerTableBox = styled.div`
  margin-bottom: 50px;
`;
const InvoiceBtnsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 30px 0 15px 0;
`;

export {
  InvoiceSearchSection,
  InvoiceSearchHeader,
  InvoiceSearchTitle,
  InvoiceSearchBox,
  InvoiceSearchResult,
  InvoiceSearchResultHeader,
  InvoiceSearchResultTitle,
  InvoiceSearchCustomerTableBox,
  InvoiceBtnsBox,
};
