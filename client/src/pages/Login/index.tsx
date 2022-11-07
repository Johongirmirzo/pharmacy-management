import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  const username = useSelector((state: RootState) => state.pharmacist.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      navigate("/");
    }
  }, [username]);

  return <LoginForm />;
};

export default Login;
