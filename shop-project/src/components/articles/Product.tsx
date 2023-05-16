import Image from "next/image";
import Tshirt from "./test/black-tshirt.png"
function Product() {
  return (
    <li className="product">
      <Image src={Tshirt} />
      <div className="description">
        <div className="title">koszulka do dupy</div>
        <div className="price">10zl</div>
      </div>
    </li>
  );
}
export default Product;
