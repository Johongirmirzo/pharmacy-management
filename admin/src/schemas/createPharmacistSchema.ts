import { object, string, ref } from 'yup';

const pharmacistRegisterSchema = object({
  fullname: 
    string().
    required("Fullname can't be empty").
    min(5, "Minimum fullname length is 5").
    max(50, "Maximum fullname length is 50"),
  username: 
    string().
    required("Username can't be empty").
    min(2, "Minimum username length is 2").
    max(50, "Maximum username length is 50"),
  email: 
    string().
    email("Email must contain @ character").
    required("Username can't be empty").
    min(6, "Minimum email length is 6").
    max(50, "Maximum email length is 50"),
  mobileNumber: 
    string().
    required("Mobile number can't be empty").
    min(7, "Minimum phone number length is 7").
    max(15, "Maximum phone number length is 15. Try removing whitespaces if any!"),
  gender:
    string().
    required("Gender can't be empty").
    matches(/male|female/i, "Only two values <male> and <female> allowed"),
  password: 
    string().
    required("Username can't be empty").
    min(9, "Minimum password length is 9").
    max(30, "Maximum password length is 30"),
  confirmPassword: string()
  .oneOf([ref("password"), null], "Passwords must match")
});

export default pharmacistRegisterSchema;
 