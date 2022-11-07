import { object, string, number, } from 'yup';

const createMedicineSchema = object({
  medicineName: 
    string().
    required("Medicine name can't be empty!").
    min(2, "Minimum medicineName length is 2").
    max(100, "Maximum medicineName length is 100"),
  batchNumber: 
    string().
    required("Batch number can't be empty!").
    min(8, "Minimum batch number length is 8").
    max(12, "Maximum batch number length is 12"),
  medicalCompanyId: 
    string().
    required("Medical company id can't be empty!"),
  releaseDate: 
    string().
    required("Medicine release date can't be empty"),
  expireDate:
    string().
    required("Medicine expire date can't be empty"),
  totalInStock: 
    number().
    required("Medicine quantity can't be empty")
    .integer("Value must be a integer")
    .min(0, "Minimum allowed value is 0")
    .max(100000, "Maximum allowed value is 100000"),
  price: 
    number().
    required("Price can't be empty")
    .min(0, "Minimum allowed value is 0")
    .max(100000, "Maximum allowed value is 100000"),

});

export default createMedicineSchema;
 