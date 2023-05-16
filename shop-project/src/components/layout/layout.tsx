import CSSTransition from "react-transition-group/CSSTransition";
import Header from "../navigation/header";
import { useState, useEffect } from "react";
function Layout(props) {
    const [visible, setVisible] = useState(true);

    function Scroll() {
      useEffect(function mount() {
        function onScroll() {
          const currentScrollPos = window.pageYOffset;
          setVisible(currentScrollPos < 150);
        }

        window.addEventListener("scroll", onScroll);

        return function unMount() {
          window.removeEventListener("scroll", onScroll);
        };
      });

      return null;
    }
//   const [visible, setVisible] = useState(true);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setVisible(currentScrollPos < 150);
//   };

//   window.addEventListener("scroll", handleScroll);
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
      <Scroll />
      <main className="main">{props.children}</main>
    </div>
  );
}

export default Layout;
