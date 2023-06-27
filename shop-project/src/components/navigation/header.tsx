import React from "react";
// import "./header.css";
import Upperheader from "./upperheader";
import Bottomheader from "./bottomheader";
import { useState, useEffect } from "react";
function Header(props) {
  return (
    <div className="mainHeader">
      <Upperheader hideModal={props.hidemodal}/>
      <Bottomheader />
    </div>
  );
}

export default Header;
