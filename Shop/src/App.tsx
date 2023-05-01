import "./App.css";
import Body from "./components/Products";
import Header from "./components/Header/header";
import CSSTransition from "react-transition-group/CSSTransition";
import { useState } from "react";
import Main from "./components/Main";
import Products from "./components/Products";
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
      <Main />
      <Main />
      <Main />
    </div>
  );
}

export default App;
