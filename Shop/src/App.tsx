import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header/header";
import CSSTransition from "react-transition-group/CSSTransition";
import { useState } from "react";
function App() {
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
      <Body />
    </div>
  );
}

export default App;
