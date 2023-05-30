import Products from "@/components/articles/Products";
import Promotions from "@/components/articles/Promotions";
import { Fragment} from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Promotions />
      <Products Items={props.products} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");

  const data = await res.json();

  return {
    props: {
      products: data.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category,
        image: item.image,
      })),
    },
  };
}
export default HomePage;
