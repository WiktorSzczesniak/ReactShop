import "./Body.css";
import Product from "./Product";
import { useRef } from "react";
function Body() {
  const divRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (divRef.current) {
      divRef.current.scrollBy({
        left: 650,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="Body">
      <ul className="list" ref={divRef}>
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
      <button className="scroll-button" onClick={handleScrollRight}>
        Scroll Right
      </button>
    </div>
  );
}

export default Body;
