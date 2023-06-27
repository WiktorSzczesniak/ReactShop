import React, { useState } from "react";

import Image from "next/image";
import tshirt from "../../../public/koszulka-bezowy.jpg"
const CartModalOverlay = (props) => {


  return (
    <div>
      <div className="modal-overlay">
        <ul className="modal-content-wrapper">
          <li className="modal-content">
            <div className="modal-image-div">
              <Image src={tshirt} className="modal-image" />
            </div>
            <div className="modal-description">
              <h2 className="modal-title">
                koszulka koszulka koszulka koszulka koszulka
              </h2>
              <p className="modal-price">100$</p>
            </div>
            <div className="modal-count-buttons-wrapper">
              <div className="modal-count-buttons">
                <button className="modal-button-less">-</button>
                <div className="modal-count">0</div>
                <button className="modal-button-more">+</button>
              </div>
            </div>
          </li>
          <li className="modal-content">
            <div className="modal-image-div">
              <Image src={tshirt} className="modal-image" />
            </div>
            <div className="modal-description">
              <h2 className="modal-title">
                koszulka koszulka koszulka koszulka koszulka
              </h2>
              <p className="modal-price">100$</p>
            </div>
            <div className="modal-count-buttons-wrapper">
              <div className="modal-count-buttons">
                <button className="modal-button-less">-</button>
                <div className="modal-count">0</div>
                <button className="modal-button-more">+</button>
              </div>
            </div>
          </li>
          <li className="modal-content">
            <div className="modal-image-div">
              <Image src={tshirt} className="modal-image" />
            </div>
            <div className="modal-description">
              <h2 className="modal-title">
                koszulka koszulka koszulka koszulka koszulka
              </h2>
              <p className="modal-price">100$</p>
            </div>
            <div className="modal-count-buttons-wrapper">
              <div className="modal-count-buttons">
                <button className="modal-button-less">-</button>
                <div className="modal-count">0</div>
                <button className="modal-button-more">+</button>
              </div>
            </div>
          </li>{" "}
          <li className="modal-content">
            <div className="modal-image-div">
              <Image src={tshirt} className="modal-image" />
            </div>
            <div className="modal-description">
              <h2 className="modal-title">
                koszulka koszulka koszulka koszulka koszulka
              </h2>
              <p className="modal-price">100$</p>
            </div>
            <div className="modal-count-buttons-wrapper">
              <div className="modal-count-buttons">
                <button className="modal-button-less">-</button>
                <div className="modal-count">0</div>
                <button className="modal-button-more">+</button>
              </div>
            </div>
          </li>
          <li className="modal-content">
            <div className="modal-image-div">
              <Image src={tshirt} className="modal-image" />
            </div>
            <div className="modal-description">
              <h2 className="modal-title">
                koszulka koszulka koszulka koszulka koszulka
              </h2>
              <p className="modal-price">100$</p>
            </div>
            <div className="modal-count-buttons-wrapper">
              <div className="modal-count-buttons">
                <button className="modal-button-less">-</button>
                <div className="modal-count">0</div>
                <button className="modal-button-more">+</button>
              </div>
            </div>
          </li>
          <div className="modal-button">
            <button onClick={props.hidemodal}>Close</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CartModalOverlay;
