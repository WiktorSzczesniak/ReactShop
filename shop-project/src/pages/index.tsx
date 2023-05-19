import Products from "@/components/articles/Products";
import Promotions from "@/components/articles/Promotions";
import { Fragment, useState, useEffect, useCallback } from "react";

function HomePage(props) {
  const [Items, setItems] = useState([]);
  const fetchShopItems = useCallback (async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");

      const data = await res.json();
      const loadedItems = data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          category: item.category,
          image: item.image,
        };
      })
      setItems(loadedItems)
 
    } catch (err) {
      console.log(err);
    }
  }, []);
   useEffect(() => {
     fetchShopItems();
   }, []);
  console.log(Items);

  return (
    <Fragment>
      <Promotions />
      <Products Items={Items} />
    </Fragment>
  );
}

export default HomePage;
