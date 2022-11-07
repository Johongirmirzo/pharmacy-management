import styled from "styled-components";

const InventoryTableOutofStock = styled.span`
  color: red;
  font-weight: 500;
`;
const InventoryTableTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 1.8rem);
`;

export { InventoryTableOutofStock, InventoryTableTitle };
