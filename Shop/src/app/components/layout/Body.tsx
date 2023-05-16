import Products from "../articles/Products";
import Promotions from "../articles/Promotions";
import "./Body.css";

function Body() {
  return (
    <div className="Body">
      <Promotions />
      <Products />
    </div>
  );
}
export default Body;
