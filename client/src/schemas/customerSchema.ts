import {object, string} from "yup";

const customerSchema = object({
    customerName: 
        string().
        required("Customer name can't be empty").
        min(2, "Minimum customer name is 2").
        max(50, "Maximum customer name is 50"),
    customerMobileNumber: 
        string().
        required("Mobile number can't be empty").
        min(7, "Minimum phone number length is 7").
        max(15, "Maximum phone number length is 15. Try removing whitespaces if any!"),
    customerPayMode:
        string().
        required("Customer pay mode can't be empty").
        matches(/cash|card/i, "Only cash and card values are allowed")
})
export default customerSchema;