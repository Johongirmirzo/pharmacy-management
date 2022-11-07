import styled from "styled-components";

const ChangePasswordSection = styled.section`
  max-width: 960px;
  margin: 30px auto 0 auto;
`;
const ChangePasswordHeader = styled.header`
  margin-bottom: 30px;
`;
const ChangePasswordTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const ChangePasswordFormBox = styled.div`
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

export {
  ChangePasswordSection,
  ChangePasswordHeader,
  ChangePasswordTitle,
  ChangePasswordFormBox,
};
