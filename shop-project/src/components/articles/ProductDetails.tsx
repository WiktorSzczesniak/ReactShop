function ProductDetails(props) {
  return (
    <div className="productDetails">
      <div className="imagebox">
        <img src={props.product.image} className="details-image" />
      </div>
      <div className="details">
        <p className="details-title">{props.product.title}</p>
        <p className="details-price">{props.product.price}$</p>
        <p className="details-description">{props.product.description}</p>
        <button className="add-to-cart-btn">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductDetails;
