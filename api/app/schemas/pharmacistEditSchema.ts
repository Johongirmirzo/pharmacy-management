import { object, string, ref } from 'yup';

const userEditSchema = object({
  fullname: 
    string().
    min(5, "Minimum fullname length is 5").
    max(50, "Maximum fullname length is 50"),
  username: 
    string().
    min(2, "Minimum username length is 2").
    max(50, "Maximum username length is 50"),
  email: 
    string().
    email("Email must contain @ character").
    min(6, "Minimum email length is 6").
    max(50, "Maximum email length is 50"),
  mobileNumber: 
    string().
    min(7, "Minimum phone number length is 7").
    max(15, "Maximum phone number length is 15. Try removing whitespaces if any!"),
  gender:
    string().
    matches(/male|female/i, "Only two values <male> and <female> allowed"),
});

export default userEditSchema;
 