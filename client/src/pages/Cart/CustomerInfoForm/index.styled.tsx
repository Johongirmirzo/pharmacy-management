import styled from "styled-components";

const CustomerInfoFormBox = styled.div`
  max-width: 960px;
  margin: 30px auto;
  padding: 20px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
`;
const CustomerInfoFormHeader = styled.header`
  margin-bottom: 30px;
`;
const CustomerInfoFormTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
`;
const CustomerInfoCheckbox = styled.input`
  margin: 0 20px 0 5px;
`;

export {
  CustomerInfoFormBox,
  CustomerInfoFormHeader,
  CustomerInfoFormTitle,
  CustomerInfoCheckbox,
};
