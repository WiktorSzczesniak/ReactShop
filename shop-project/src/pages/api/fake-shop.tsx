async function fakeShop() {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response)
}
export default fakeShop