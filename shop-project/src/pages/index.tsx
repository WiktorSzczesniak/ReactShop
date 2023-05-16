import Products from "@/components/articles/Products";
import Promotions from "@/components/articles/Promotions";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment >
        <Promotions />
        <Products />
    </Fragment>

  );
}
export default HomePage