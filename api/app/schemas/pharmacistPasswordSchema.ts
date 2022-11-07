import { object, string, ref } from 'yup';

const pharmacistPasswordSchema = object({
  currentPassword:
    string().
    required("Current Password can't be empty!").
    min(9, "Minimum password length is 9").
    max(30, "Maximum password length is 30"),
  newPassword: 
    string().
    required("Password can't be empty").
    min(9, "Minimum password length is 9").
    max(30, "Maximum password length is 30"),
  newConfirmPassword: 
    string().
    oneOf([ref("newPassword"), null], "Passwords must match!!!")
});

export default pharmacistPasswordSchema;
 