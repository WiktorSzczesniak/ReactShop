import Products from "@/components/articles/Products";
export default function ClothingPage(props) {
  console.log(props.products);
  return (
    <div className="content">
      <Products Items={props.products} />
    </div>
  );
}
export async function getStaticProps() {
  try {
    const [menResponse, womenResponse] = await Promise.all([
      fetch("https://fakestoreapi.com/products/category/men's%20clothing"),
      fetch("https://fakestoreapi.com/products/category/women's%20clothing"),
    ]);

    const [menData, womenData] = await Promise.all([
      menResponse.json(),
      womenResponse.json(),
    ]);

    const products = [
      ...menData.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category,
        image: item.image,
      })),
      ...womenData.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category,
        image: item.image,
      })),
    ];

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching clothing data:', error);
    return {
      props: {
        products: null,
      },
    };
  }
}