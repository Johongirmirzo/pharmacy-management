import {ICustomerInfo} from "../index.types"

export type CustomerInfoFormProps = {
    isLoading: boolean;
    orderMedicine: (customerInfo: ICustomerInfo)=> void;
}