import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useParams } from "react-router-dom";
import { IOrder } from "../../redux/order";
import InvoiceMedicineTable from "./InvoiceMedicineTable";
import InvoiceCustomerTable from "./InvoiceCustomerTable";
import PrintInvoice from "../../components/PrintInvoice";
import DownloadInvoice from "../../components/DownloadInvoice";
import {
  InvoiceSection,
  InvoiceHeader,
  InvoiceTitle,
  PrintInvoiceBtnsBox,
  InvoiceTableBox,
} from "./index.styled";

const Invoice = () => {
  const { invoiceNumber } = useParams();
  const orders = useSelector((state: RootState) => state.order.orders);
  const [order, setOrder] = useState({} as IOrder);
  const comRef = useRef();

  useEffect(() => {
    const currentOrder = orders.find(
      (order) => order.invoiceNumber === invoiceNumber
    );
    console.log(orders);
    console.log(currentOrder);
    if (currentOrder) {
      setOrder(currentOrder);
    }
  }, [invoiceNumber, orders]);
  return (
    <InvoiceSection>
      <InvoiceHeader>
        <InvoiceTitle>Order Invoice</InvoiceTitle>
      </InvoiceHeader>
      {order.invoiceNumber && (
        <>
          <PrintInvoiceBtnsBox>
            <PrintInvoice componentRef={comRef} />
            <DownloadInvoice componentRef={comRef} />
          </PrintInvoiceBtnsBox>
          <InvoiceTableBox ref={comRef}>
            <InvoiceCustomerTable order={order} componentRef={comRef} />
            <InvoiceMedicineTable order={order} componentRef={comRef} />
          </InvoiceTableBox>
        </>
      )}
    </InvoiceSection>
  );
};

export default Invoice;
