import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { storePharmacist } from "../../redux/pharmacist";
import loginSchema from "../../schemas/pharmacistLoginSchema";
import {
  LoginBox,
  LoginFormBox,
  LoginTextBox,
  LoginTitle,
  LoginForm,
  LoginFormControl,
  LoginLabel,
  LoginInput,
  LoginButton,
  LoginFieldError,
  LoginAlert,
  LoginAlertText,
  LoginAlertCancelBtn,
} from "./index.styled";
import {
  getPharmacistLoginData,
  setPharmacistLoginData,
  removePharmacistLoginData,
  setToken,
} from "../../util/localStorage";
import { login } from "../../api/pharmacist";
import { ILoginData } from "./index.types";

const Login = () => {
  const loginRememberUserData = getPharmacistLoginData();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loginPharmacist = async (loginData: ILoginData) => {
    try {
      setIsLoading(true);
      const response = await login(loginData);
      setIsLoading(false);
      console.log("Login Response Data", response.data);
      if (loginData.rememberMe) {
        setPharmacistLoginData(loginData);
      } else {
        removePharmacistLoginData();
      }

      const pharmacist = {
        pharmacistId: response.data.pharmacist._id,
        fullname: response.data.pharmacist.fullname,
        username: response.data.pharmacist.username,
        email: response.data.pharmacist.email,
        mobileNumber: response.data.pharmacist.mobileNumber,
        isAdmin: response.data.pharmacist.isAdmin,
      };
      dispatch(
        storePharmacist({
          pharmacist: { ...pharmacist },
        })
      );
      setToken(response.data.accessToken, response.data.refreshToken);
      setError([]);
      navigate("/");
    } catch (error: any) {
      setIsLoading(false);
      setError([
        error.response.status === 429
          ? error.response.data
          : "Wrong credentials",
      ]);
    }
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  return (
    <LoginBox>
      <LoginFormBox>
        {error &&
          error.map((err, index) => (
            <LoginAlert>
              <LoginAlertText>{err}</LoginAlertText>
              <LoginAlertCancelBtn
                onClick={closeAlertMessage.bind(null, index)}
              >
                X
              </LoginAlertCancelBtn>
            </LoginAlert>
          ))}
        <LoginTextBox>
          <LoginTitle>Pharmacist Login</LoginTitle>
        </LoginTextBox>
        <Formik
          initialValues={{
            email: loginRememberUserData.email || "pharmacist@gmail.com",
            password: loginRememberUserData.password || "qweqweqwe",
            rememberMe: false,
          }}
          validationSchema={loginSchema}
          onSubmit={async (loginData) => {
            console.log(loginData);
            loginPharmacist(loginData);
          }}
        >
          {({
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            handleChange,
            values,
          }) => (
            <LoginForm onSubmit={handleSubmit}>
              <LoginFormControl>
                <LoginLabel htmlFor="email">Email</LoginLabel>
                <LoginInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Please enter email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <LoginFieldError>{errors.email}</LoginFieldError>
                ) : null}
              </LoginFormControl>

              <LoginFormControl>
                <LoginLabel htmlFor="password">Password</LoginLabel>
                <LoginInput
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Please enter password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password ? (
                  <LoginFieldError>{errors.password}</LoginFieldError>
                ) : null}
              </LoginFormControl>
              <LoginFormControl>
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  checked={values.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </LoginFormControl>
              <LoginButton
                type="submit"
                disabled={isLoading ? true : false}
                isLoading={isLoading ? true : false}
              >
                {isLoading ? "Logging In..." : "Login"}
              </LoginButton>
            </LoginForm>
          )}
        </Formik>
      </LoginFormBox>
    </LoginBox>
  );
};

export default Login;
