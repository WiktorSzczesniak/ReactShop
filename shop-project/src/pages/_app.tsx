import Layout from "@/components/layout/layout";
import "../components/navigation/header.css"
import "../components/navigation/DetailsBottomheader.css"
import "./globals.css"
import "../components/articles/Products.css"
import "../components/layout/layout.css"
import "../components/articles/Promotions.css"
import "../components/articles/productDetails.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
