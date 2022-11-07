import React from "react";
import ChangeProfileForm from "./ChangeProfileForm";
import {
  ChangeProfileSection,
  ChangeProfileHeader,
  ChangeProfileTitle,
  ChangeProfileFormBox,
} from "./index.styled";

const ChangeProfile = () => {
  return (
    <ChangeProfileSection>
      <ChangeProfileHeader>
        <ChangeProfileTitle>Change Profile Info</ChangeProfileTitle>
      </ChangeProfileHeader>
      <ChangeProfileFormBox>
        <ChangeProfileForm />
      </ChangeProfileFormBox>
    </ChangeProfileSection>
  );
};

export default ChangeProfile;
