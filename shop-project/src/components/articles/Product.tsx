import Image from "next/image";
import Tshirt from "./test/black-tshirt.png"
function Product(props) {
  return (
    <li className="product">
      <Image src={Tshirt} />
      <div className="description">
        <div className="title">{props.title}</div>
        <div className="price">{props.price}</div>
      </div>
    </li>
  );
}
export default Product;
