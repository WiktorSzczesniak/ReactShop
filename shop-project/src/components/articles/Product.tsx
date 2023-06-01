import Image from "next/image";
import Link from "next/link";
import Tshirt from "./test/black-tshirt.png";
function Product(props) {
  let Title = props.title;
  if (Title.length > 40) {
    Title = Title.slice(0, 40) + "...";
  }

  return (
    <li className="product">
      <Link href={`/product/${props.id}`}>
        <img src={props.image} />
        <div className="description">
          <div className="title" title={props.title}>
            {Title}
          </div>
          <div className="price">{props.price}$</div>
        </div>
      </Link>
    </li>
  );
}
export default Product;
