import "./layout.css";
import Header from "../Header/header";
import CSSTransition from "react-transition-group/CSSTransition";
import { useState } from "react";
import Main from "./Body";

function Layout(props) {
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos < 150);
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div>
      <CSSTransition
        in={visible}
        timeout={600}
        classNames="header-transition"
        unmountOnExit
      >
        <Header />
      </CSSTransition>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
