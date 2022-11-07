import styled from "styled-components";

const LoaderBox = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;
const LoaderTitle = styled.h1``;

export { LoaderBox, LoaderTitle };
