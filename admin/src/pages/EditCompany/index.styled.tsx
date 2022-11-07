import styled from "styled-components";

const EditCompanyBox = styled.section`
  max-width: 960px;
  margin: 30px auto 0 auto;
`;
const EditCompanyHeader = styled.header`
  margin-bottom: 30px;
`;
const EditCompanyTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const EditCompanyFormBox = styled.div`
  background: #fff;
  padding: 20px;
`;

export {
  EditCompanyBox,
  EditCompanyHeader,
  EditCompanyTitle,
  EditCompanyFormBox,
};
