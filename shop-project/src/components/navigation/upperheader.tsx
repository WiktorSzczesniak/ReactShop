import Link from "next/link";

import menu from "../../../public/togglemenu.png";
import profile from "../../../public/profile.png";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import Togglemenu from "./toggledmenu";
import { CSSTransition } from "react-transition-group";
import CartModalOverlay from "../cart/cartmodal";
import cart from "../../../public/cart.png";
import { useSelector } from "react-redux";

function Upperheader(props) {
  const totalQuentity = useSelector((state) => state.cart.totalQuantity);
  const [isMobile, setIsMobile] = useState(false);
  const [isShown, setIsShown] = useState(false);
  function onClick() {
    setIsShown(!isShown);
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="upperheader">
      <div className="logo">
        <Link href="/">ReactShop</Link>
      </div>
      <div className={(isMobile ? "hidden" : "") + " interface"}>
        <Link href="/login">
          <Image src={profile} className="profile-cart-img" />
        </Link>
        <div className="cart">
          <Image
            src={cart}
            className="profile-cart-img cart-header"
            onClick={props.hideModal}
          />
          {totalQuentity>0 && <div className="totalQuantity">
            <p className="totalCartQuantity">{totalQuentity}</p>
          </div>}
        </div>
      </div>
      <div className="toggle">
        {isMobile && (
          <Image src={menu} className="toggle-menu" onClick={onClick} />
        )}
      </div>
      <CSSTransition
        in={isShown}
        timeout={150}
        classNames="menu-transition"
        unmountOnExit
      >
        <Togglemenu OnClick={onClick} hideModal={props.hideModal} />
      </CSSTransition>
    </div>
  );
}

export default Upperheader;
