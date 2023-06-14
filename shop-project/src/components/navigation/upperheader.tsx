import Link from "next/link";
import cart from "../../../public/cart.png";
import menu from "../../../public/togglemenu.png";
import profile from "../../../public/profile.png";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import Togglemenu from "./toggledmenu";
function Upperheader() {
  const [isMobile, setIsMobile] = useState(false);
  const [isShown, setIsShown] = useState(false);
function onClick() {
  setIsShown(!isShown)
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
        <Image src={profile} className="profile-cart-img" />
        <Image src={cart} className="profile-cart-img" />
      </div>
      <div className="toggle">
        {isMobile && (
          <Image src={menu} className="toggle-menu" onClick={onClick} />
        )}
      </div>

      {isShown && (
        <Togglemenu OnClick={onClick}/>
      )}
    </div>
  );
}

export default Upperheader;
