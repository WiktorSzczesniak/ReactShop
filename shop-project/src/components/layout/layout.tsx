import CSSTransition from "react-transition-group/CSSTransition";
import Header from "../navigation/header";
import { useState, useEffect } from "react";
import CartModalOverlay from "../cart/cartmodal";
function Layout(props) {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
 
  function Scroll() {
const currentScrollPos = window.pageYOffset;
const makeVisible = currentScrollPos < 150 || currentScrollPos < prevScrollPos;
   setPrevScrollPos(currentScrollPos);
   setVisible(makeVisible);
  }
  useEffect(() => {
    window.addEventListener("scroll", Scroll);
    return () => window.removeEventListener("scroll", Scroll);
  }, [prevScrollPos]);
  return (
    <div>
      <CSSTransition
        in={visible}
        timeout={600}
        classNames="header-transition"
        unmountOnExit
      >
        <Header hidemodal={toggleModal} />
      </CSSTransition>
      <main className="main">{props.children}</main>
      {isOpen && <CartModalOverlay hidemodal={toggleModal}/>}
    </div>
  );
}

export default Layout;
