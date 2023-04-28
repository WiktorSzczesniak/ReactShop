import "./Body.css";
import Product from "./Product";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
function Body() {
  const ref = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 650,
        behavior: "smooth",
      });
    }
  };
  const handleScrollLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -650,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="Body">
      <div className="products">
        <ul className="list" ref={ref}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>

        <div className="scroll-button-right" onClick={handleScrollRight}>
          <p> 〉</p>
        </div>
        <div className="scroll-button-left" onClick={handleScrollLeft}>
          <p>〈</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
