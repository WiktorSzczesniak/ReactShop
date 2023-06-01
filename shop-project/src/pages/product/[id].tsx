import ProductDetails from "@/components/articles/ProductDetails";
import Products from "@/components/articles/Products";
import Promotions from "@/components/articles/Promotions";
import { Fragment } from "react";

function ItemPage(props) {
  // console.log(props.product)
  return (
    <div className="content">
      <ProductDetails product={props.product} />
    </div>
  );
}

export default ItemPage;

export async function getStaticPaths() {
  try {
    const response = await fetch("https://fakestoreapi.com/products/");
    const Products = await response.json();

    const paths = Products.map((product) => ({
      params: { id: product.id.toString() },
    }));
    return { paths, fallback: true };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({ params }) {

  try {
      const { id } = params;
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();

    return {
      props: {
        product: {
          id: product.id,
          title: product.title,
          price: product.price,
          category: product.category,
          image: product.image,
          description: product.description,
        },
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { product: null }, revalidate: 60 };
  }
}
