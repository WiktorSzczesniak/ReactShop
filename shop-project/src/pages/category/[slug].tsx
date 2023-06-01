import Products from "@/components/articles/Products";
export default function CategoryPage(props) {
  return (
    <div className="content">
      <Products Items={props.products} />
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await response.json();

  const paths = categories.map((category) => ({
    params: { slug: category },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${slug}`
  );
  const products = await response.json();
  return {
    props: {
      products: products.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category,
        image: item.image,
      })),
    },
  };
}
