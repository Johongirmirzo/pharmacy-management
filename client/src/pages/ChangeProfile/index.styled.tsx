import styled from "styled-components";

const ChangeProfileSection = styled.section`
  max-width: 960px;
  margin: 30px auto 0 auto;
`;
const ChangeProfileHeader = styled.header`
  margin-bottom: 30px;
`;
const ChangeProfileTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const ChangeProfileFormBox = styled.div`
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

export {
  ChangeProfileSection,
  ChangeProfileHeader,
  ChangeProfileTitle,
  ChangeProfileFormBox,
};
