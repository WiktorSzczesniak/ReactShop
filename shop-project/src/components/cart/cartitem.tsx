import tshirt from "../../../public/koszulka-bezowy.jpg";
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/cart-slice";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id, image } = props.item;

  function removeItemHandler() {
    dispatch(cartActions.removeItemFromCart(id));
  }

  function addItemHandler() {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  }
  return (
    <li className="modal-content">
      <div className="modal-image-div">
        <Image
          src={image}
          className="modal-image"
          width="200"
          height="200"
         
        />
      </div>
      <div className="modal-description">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-price">${price.toFixed(2)}</p>
        <p className="modal-price">total:${total.toFixed(2)}</p>
      </div>
      <div className="modal-count-buttons-wrapper">
        <div className="modal-count-buttons">
          <button onClick={removeItemHandler} className="modal-button-less">
            -
          </button>
          <div className="modal-count">x{quantity}</div>
          <button onClick={addItemHandler} className="modal-button-more">
            +
          </button>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
