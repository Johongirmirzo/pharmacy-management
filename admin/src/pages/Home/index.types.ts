import {IOrderItems} from "../../redux/orders"

interface IOrder {
    pharmacistId: string;
    customerId: string;
    invoiceNumber: string;
    orderItems: IOrderItems[];
}
export default IOrder;