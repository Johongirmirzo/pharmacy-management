import styled, { css } from "styled-components";

interface IAlertProps {
  success: boolean;
}

const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 15px;
  margin-bottom: 10px;
  border: 2px solid #e57373;
  border-radius: 5px;
`;
const AlertText = styled.p`
  color: hsl(0, 68%, 37%);
  font-weight: bold;
`;
const AlertCancelBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  border: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 16px;
  background: transparent;
  color: darkred;
  cursor: pointer;
`;

export { Alert, AlertText, AlertCancelBtn };
