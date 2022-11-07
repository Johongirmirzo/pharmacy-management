import {object, string} from "yup";

const userLoginSchema = object({
    email: 
        string().
        required("Email can't be empty").
        email("Email must contain @"),
    password: 
        string().
        required("Passwords can't be empty").
        min(9, "Minimum password length is 9").
        max(30, "Maximum password length is 30")
})

export default userLoginSchema;