import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../redux/store";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  const admin = useSelector((state: RootState) => state.admin);
  const navigate = useNavigate();
  useEffect(() => {
    if (admin.email) {
      navigate("/");
    }
  }, [admin]);

  console.log(admin);
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
