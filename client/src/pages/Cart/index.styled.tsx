import styled from "styled-components";

const CartdSection = styled.section`
  margin: 30px 0;
`;
const CartdHeader = styled.header`
  margin-bottom: 50px;
`;
const CartdTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const CartdSecondaryTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 1.8rem);
`;

export { CartdSection, CartdHeader, CartdTitle, CartdSecondaryTitle };
