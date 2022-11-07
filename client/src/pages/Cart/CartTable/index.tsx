import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import { CartTableBtn } from "./index.styled";
import { CartTableProps } from "./index.types";

const CartTable = ({ cartItems, deleteCartItem }: CartTableProps) => {
  const calculateOrderTotal = () => {
    console.log(cartItems.forEach((item) => console.log(item.total, "item")));
    return cartItems.reduce((total, currEl) => total + currEl.total, 0);
  };
  console.log("Cart Table", cartItems);
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>MEDICINE NAME</Th>
          <Th>QUANTITY</Th>
          <Th>PRICE</Th>
          <Th>TOTAL</Th>
          <Th>ACTION</Th>
        </Tr>
      </Thead>
      <Tbody>
        {cartItems.map((cartItem, index) => (
          <Tr key={cartItem._id}>
            <Td>{index + 1}</Td>
            <Td>{cartItem.medicineName}</Td>
            <Td>{cartItem.quantity}</Td>
            <Td>{cartItem.price}</Td>
            <Td>${cartItem.total}</Td>
            <Td>
              <CartTableBtn onClick={() => deleteCartItem(cartItem._id)}>
                <RiDeleteBin6Fill />
              </CartTableBtn>
            </Td>
          </Tr>
        ))}
        <Tr>
          <Td>
            <b>Grand Total</b>
          </Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td>
            <strong>${calculateOrderTotal()}</strong>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default CartTable;
