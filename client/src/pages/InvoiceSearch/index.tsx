import React, { useState, useRef } from "react";
import PrintInvoice from "../../components/PrintInvoice";
import DownloadInvoice from "../../components/DownloadInvoice";
import InvoiceSearchForm from "./InvoiceSearchForm";
import InvoiceSearchCustomerTable from "./InvoiceSearchCustomerTable";
import InvoiceSearchMedicineTable from "./InvoiceSearchMedicineTable";
import {
  InvoiceSearchSection,
  InvoiceSearchHeader,
  InvoiceSearchTitle,
  InvoiceSearchBox,
  InvoiceSearchResult,
  InvoiceSearchResultHeader,
  InvoiceSearchResultTitle,
  InvoiceSearchCustomerTableBox,
  InvoiceSearchTableBox,
  InvoiceSearchResultBtnsBox,
} from "./index.styled";
import { IOrderInvoice } from "./index.types";

const InvoiceSearch = () => {
  const [order, setOrder] = useState({} as IOrderInvoice);
  const componentRef = useRef();

  const getOrder = (order: IOrderInvoice) => setOrder(order);

  console.log(order);
  return (
    <InvoiceSearchSection>
      <InvoiceSearchHeader>
        <InvoiceSearchTitle>View Order by Invoice</InvoiceSearchTitle>
      </InvoiceSearchHeader>
      <InvoiceSearchBox>
        <InvoiceSearchForm getOrder={getOrder} />
      </InvoiceSearchBox>
      {order.orderItems && (
        <InvoiceSearchResult>
          <InvoiceSearchResultHeader>
            <InvoiceSearchResultTitle>
              Invoice Search Results
            </InvoiceSearchResultTitle>
          </InvoiceSearchResultHeader>
          <InvoiceSearchResultBtnsBox>
            <PrintInvoice componentRef={componentRef} />
            <DownloadInvoice componentRef={componentRef} />
          </InvoiceSearchResultBtnsBox>
          <InvoiceSearchTableBox ref={componentRef}>
            <InvoiceSearchCustomerTableBox>
              <InvoiceSearchCustomerTable order={order} />
            </InvoiceSearchCustomerTableBox>
            <InvoiceSearchMedicineTable order={order} />
          </InvoiceSearchTableBox>
        </InvoiceSearchResult>
      )}
    </InvoiceSearchSection>
  );
};

export default InvoiceSearch;
