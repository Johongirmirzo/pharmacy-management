import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { deleteCartItem as removeCartItem } from "../../redux/cart";
import { addOrder } from "../../redux/order";
import { clearCart } from "../../redux/cart";
import { deleteCartItem } from "../../api/cart";
import { createOrder } from "../../api/order/order";
import CustomerInfoForm from "./CustomerInfoForm";
import CartTable from "./CartTable";
import { CartdSection, CartdHeader, CartdTitle } from "./index.styled";
import { ICustomerInfo } from "./index.types";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const { pharmacistId } = useSelector((state: RootState) => state.pharmacist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const orderMedicine = async (customerInfo: ICustomerInfo) => {
    try {
      const order = {
        ...customerInfo,
        orderItems: cartItems,
      };
      const orderResponse = await createOrder(order, pharmacistId);
      console.log("Order Response", orderResponse);

      dispatch(
        addOrder({
          newOrder: {
            ...orderResponse.data.order,
            customerName: orderResponse.data.customerName,
            customerMobileNumber: orderResponse.data.customerMobileNumber,
            customerPayMode: orderResponse.data.customerPayMode,
          },
        })
      );
      dispatch(clearCart({}));
      navigate(`/invoice/${orderResponse.data.order.invoiceNumber}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCartItem = async (cartItemId: string) => {
    try {
      await deleteCartItem(cartItemId);
      dispatch(removeCartItem({ cartItemId }));
    } catch (err) {
      console.error(err);
    }
  };

  console.log("Cartt page", cartItems);
  return (
    <CartdSection>
      {cartItems.length > 0 ? (
        <>
          <CartdHeader>
            <CartdTitle>Cart Items</CartdTitle>
          </CartdHeader>
          <CustomerInfoForm
            orderMedicine={orderMedicine}
            isLoading={isLoading}
          />
          <CartTable
            cartItems={cartItems}
            deleteCartItem={handleDeleteCartItem}
          />
        </>
      ) : (
        <CartdHeader>
          <CartdTitle>No medicines's been added to the card</CartdTitle>
        </CartdHeader>
      )}
    </CartdSection>
  );
};

export default Cart;
