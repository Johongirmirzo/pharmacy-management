import React from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import {
  ChangePasswordSection,
  ChangePasswordHeader,
  ChangePasswordTitle,
  ChangePasswordFormBox,
} from "./index.styled";

const ChangeProfile = () => {
  return (
    <ChangePasswordSection>
      <ChangePasswordHeader>
        <ChangePasswordTitle>Change Profile Info</ChangePasswordTitle>
      </ChangePasswordHeader>
      <ChangePasswordFormBox>
        <ChangePasswordForm />
      </ChangePasswordFormBox>
    </ChangePasswordSection>
  );
};

export default ChangeProfile;
