import React, { useState, useRef } from "react";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../styles/UI/Alert/index.styled";
import { FormInput, FormButton } from "../../styles/UI/Form/index.styled";
import InvoiceSearchTable from "./InvoiceSearchTable";
import PrintInvoice from "../../components/PrintInvoice";
import DownloadInvoice from "../../components/DownloadInvoice";
import {
  InvoiceSearchSection,
  InvoiceSearchHeader,
  InvoiceSearchTitle,
  InvoiceSearchBox,
  InvoiceSearchResult,
  InvoiceSearchResultHeader,
  InvoiceSearchResultTitle,
  InvoiceSearchCustomerTableBox,
  InvoiceBtnsBox,
} from "./index.styled";
import { getOrderInvoice } from "../../api/report";
import { getCustomer } from "../../api/customer";
import { IOrderInvoice } from "./index.types";

const InvoiceSearch = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [error, setError] = useState<string[]>([]);
  const [order, setOrder] = useState({} as IOrderInvoice);
  const componentRef = useRef();

  const handleSearchInvoiceClick = () => {
    if (!invoiceNumber.trim().length) {
      setError(["Search invoice input can't be empty!"]);
    } else {
      (async () => {
        try {
          const orderResponse = await getOrderInvoice(invoiceNumber);
          console.log(orderResponse);
          if (!orderResponse.data) {
            return setError(["Please provide valid invoice number!"]);
          }
          const customerResponse = await getCustomer(
            orderResponse.data.customerId
          );

          const customer = {
            customerName: customerResponse.data.name,
            customerMobileNumber: customerResponse.data.mobileNumber,
            customerPayMode: customerResponse.data.paymentType,
          };

          setError([]);
          setOrder({
            ...customer,
            orderItems: orderResponse.data.orderItems,
          });
        } catch (err: any) {
          console.error(err.message);
        }
      })();
    }
  };
  const handleUpdateInvoiceNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInvoiceNumber(e.target.value);
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  console.log(order);
  return (
    <InvoiceSearchSection>
      <InvoiceSearchHeader>
        <InvoiceSearchTitle>View Order by Invoice</InvoiceSearchTitle>
      </InvoiceSearchHeader>
      <InvoiceSearchBox>
        {error.length > 0 &&
          error.map((err, index) => (
            <Alert key={index}>
              <AlertText>{err}</AlertText>
              <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
                X
              </AlertCancelBtn>
            </Alert>
          ))}
        <FormInput
          type="text"
          name="invoiceNumber"
          placeholder="Enter Invoice Number"
          onChange={handleUpdateInvoiceNumberChange}
          value={invoiceNumber}
        />
        <FormButton onClick={handleSearchInvoiceClick}>
          Search Invoice
        </FormButton>
      </InvoiceSearchBox>
      {order.orderItems && (
        <InvoiceSearchResult>
          <InvoiceSearchResultHeader>
            <InvoiceSearchResultTitle>
              Invoice Search Results
            </InvoiceSearchResultTitle>
          </InvoiceSearchResultHeader>

          <>
            <InvoiceSearchCustomerTableBox>
              <InvoiceBtnsBox>
                <PrintInvoice componentRef={componentRef} />
                <DownloadInvoice componentRef={componentRef} />
              </InvoiceBtnsBox>
              <InvoiceSearchTable order={order} componentRef={componentRef} />
            </InvoiceSearchCustomerTableBox>
          </>
        </InvoiceSearchResult>
      )}
    </InvoiceSearchSection>
  );
};

export default InvoiceSearch;
