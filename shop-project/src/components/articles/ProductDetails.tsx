import { useDispatch } from "react-redux";
import { cartActions } from "@/store/cart-slice";
function ProductDetails(props) {

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.product.id,
        title: props.product.title,
        price: props.product.price,
        image: props.product.image,
      })
    );
  };
  return (
    <div className="productDetails">
      <div className="imagebox">
        <img src={props.product.image} className="details-image" />
      </div>
      <div className="details">
        <p className="details-title">{props.product.title}</p>
        <p className="details-price">{props.product.price}$</p>
        <p className="details-description">{props.product.description}</p>
        <button className="add-to-cart-btn" onClick={addToCartHandler}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
