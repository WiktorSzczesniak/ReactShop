import Link from "next/link";
import cart from "../../../public/cart.png";
import menu from "../../../public/togglemenu.png";
import profile from "../../../public/profile.png";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import Togglemenu from "./toggledmenu";
import { CSSTransition } from "react-transition-group";

function Upperheader() {
  const [isMobile, setIsMobile] = useState(false);
  const [isShown, setIsShown] = useState(false);
function onClick() {
      setIsShown(!isShown)
      ;
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
        <Link href="/login" >
          <Image src={profile} className="profile-cart-img" />
        </Link>
        <Link href="/login" >
          <Image src={cart} className="profile-cart-img" />
        </Link>
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
        <Togglemenu OnClick={onClick} />
      </CSSTransition>
    </div>
  );
}

export default Upperheader;
