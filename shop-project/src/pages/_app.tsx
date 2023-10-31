import "../components/navigation/header.css";
import "../components/navigation/DetailsBottomheader.css";
import "./globals.css";
import "../components/articles/Products.css";
import "../components/layout/layout.css";
import "../components/articles/Promotions.css";
import "../components/articles/productDetails.css";
import "../components/profile/login.css";
import "../components/cart/cartmodal.css";
import Layout from "@/components/layout/layout";
import store from "@/store";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkTokenExpiration } from "@/store/Auth-slice";

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
