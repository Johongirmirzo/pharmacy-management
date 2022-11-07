import React, { useState } from "react";
import { getCustomer } from "../../../api/customer";
import { getOrderInvoice } from "../../../api/report";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../styles/UI/Alert/index.styled";
import { FormInput, FormButton } from "../../../styles/UI/Form/index.styled";
import { IOrderInvoice } from "../index.types";

type InvoiceSearchFormProps = {
  getOrder: (order: IOrderInvoice) => void;
};

const InvoiceSearchForm = ({ getOrder }: InvoiceSearchFormProps) => {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const handleSearchInvoiceClick = () => {
    if (!invoiceNumber.trim().length) {
      setError(["Search invoice input can't be empty!"]);
    } else {
      (async () => {
        try {
          setIsLoading(true);
          const orderResponse = await getOrderInvoice(invoiceNumber);
          console.log(orderResponse);
          if (!orderResponse.data) {
            setIsLoading(false);
            return setError(["Please provide a valid invoice number!"]);
          }
          const customerResponse = await getCustomer(
            orderResponse.data.customerId
          );
          setIsLoading(false);

          const customer = {
            customerName: customerResponse.data.name,
            customerMobileNumber: customerResponse.data.mobileNumber,
            customerPayMode: customerResponse.data.paymentType,
          };

          setError([]);
          getOrder({
            ...customer,
            orderItems: orderResponse.data.orderItems,
          });
        } catch (err: any) {
          setIsLoading(false);
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

  return (
    <>
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
      <FormButton
        isLoading={isLoading ? true : false}
        disabled={isLoading ? true : false}
        onClick={handleSearchInvoiceClick}
      >
        {isLoading ? "Searching Invoice..." : "Search Invoice"}
      </FormButton>
    </>
  );
};

export default InvoiceSearchForm;
