import styled from "styled-components";

const OrdersSection = styled.section`
  margin: 30px 0;
`;
const OrdersHeader = styled.header`
  margin-bottom: 30px;
`;
const OrdersTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, calc(3vw + 1rem), 2.3rem);
`;
const OordersSecondaryHeading = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 1.8rem);
`;

export { OrdersSection, OrdersHeader, OrdersTitle, OordersSecondaryHeading };
