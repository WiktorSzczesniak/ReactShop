import Product from "./Product";
import { useRef } from "react";

function Products(props) {
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
        {props.Items.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            image={item.image}
          />
        ))}
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
