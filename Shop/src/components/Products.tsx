import "./Products.css";
import Product from "./Product";
import { useRef } from "react";
import Promotions from "./Promotions";
function Products() {
  const ref = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 370,
        behavior: "smooth",
      });
    }
  };
  const handleScrollLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -370,
        behavior: "smooth",
      });
    }
  };
  return (
    
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
  
  
  );
}

export default Products;
