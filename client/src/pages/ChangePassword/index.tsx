import React, { useState } from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import {
  ChangePasswordSection,
  ChangePasswordHeader,
  ChangePasswordTitle,
  ChangePasswordFormBox,
} from "./index.styled";

const ChangePassword = () => {
  return (
    <ChangePasswordSection>
      <ChangePasswordHeader>
        <ChangePasswordTitle>Change Password</ChangePasswordTitle>
      </ChangePasswordHeader>

      <ChangePasswordFormBox>
        <ChangePasswordForm />
      </ChangePasswordFormBox>
    </ChangePasswordSection>
  );
};

export default ChangePassword;
