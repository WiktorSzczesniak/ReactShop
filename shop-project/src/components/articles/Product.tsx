import Image from "next/image";
import Link from "next/link";
import Tshirt from "./test/black-tshirt.png";
function Product(props) {
  let Title = props.title;
  if (Title.length > 25) {
    Title = Title.slice(0, 25) + "...";
  }

  return (
    <li className="product">
      <Link href={`/product/${props.id}`}>
        <img src={props.image} />
        <div className="description">
          <div className="title" title={props.title}>
            {Title}
            <p className="price">{props.price}$</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
export default Product;
