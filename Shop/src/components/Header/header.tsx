import React from "react";
import "./header.css";
import Upperheader from "./upperheader";
import Bottomheader from "./bottomheader";
import { useState, useEffect } from "react";
function Header() {
  return (
    <div className="mainHeader">
      <Upperheader />
      <Bottomheader />
    </div>
  );
}

export default Header;
