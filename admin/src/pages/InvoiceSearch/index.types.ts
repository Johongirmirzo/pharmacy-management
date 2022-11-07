
export interface IOrerInvoiceList {
    _id: string;
    companyName: string;
    medicineName: string;
    batchNumber: string;
    medicineId: string;
    price: number;
    quantity: number;
    total: number;
    soldDate: string;
  }
  
export interface IOrderInvoice {
    customerName: string;
    customerMobileNumber: string;
    customerPayMode: string;
    orderItems: IOrerInvoiceList[];
  }