function ProductDetails(props) {
    console.log(props.product)
return (
  <div>
    <img src={props.product.image} />
    <p>{props.product.title}</p>
    <p>{props.product.price}</p>
    <p>{props.product.description}</p>
  </div>
);
}

export default ProductDetails;