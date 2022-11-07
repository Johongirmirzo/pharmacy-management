import React from "react";
import { FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { PrintInvoiceBtn } from "./index.styled";
import { PrintInvoiceProps } from "./index.types";

const PrintInvoice = ({ componentRef }: PrintInvoiceProps) => {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <PrintInvoiceBtn onClick={handlePrint}>
      Print <FaPrint />
    </PrintInvoiceBtn>
  );
};

export default PrintInvoice;
