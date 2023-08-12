import React, { useState } from "react";
import { useSelector } from "react-redux";

import CartItem from "./cartitem";
const CartModalOverlay = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartPrice = useSelector((state) => state.cart.cartPrice);

  return (
    <div>
      <div className="modal-overlay">
        <ul className="modal-content-wrapper">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
                image: item.image,
              }}
            />
          ))}
          <div className="modal-button">
            <p className="totalcartprice">
              Total cart Price: ${cartPrice.toFixed(2)}
            </p>
            <button>buy</button>
            <button onClick={props.hidemodal}>Close</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CartModalOverlay;
