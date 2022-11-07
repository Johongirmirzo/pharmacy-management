import React from "react";
import ReactToPdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";
import { DownLoadInvoiceBtn } from "./index.styled";
import { DownLoadInvoiceProps } from "./index.types";

const DownLoadInvoice = ({ componentRef }: DownLoadInvoiceProps) => {
  return (
    <ReactToPdf
      targetRef={componentRef}
      filename="customer-order-table.pdf"
      x={0.5}
      y={0.5}
      scale={0.6}
    >
      {({ toPdf }: { toPdf: any }) => (
        <DownLoadInvoiceBtn onClick={toPdf}>
          Download Invoice <FaDownload />
        </DownLoadInvoiceBtn>
      )}
    </ReactToPdf>
  );
};

export default DownLoadInvoice;
