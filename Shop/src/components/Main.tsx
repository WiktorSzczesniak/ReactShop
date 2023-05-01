import Products from "./Products";
import Promotions from "./Promotions";
import "./Main.css"

function Main () {
    return (
      <div className="Main">
        <Promotions />
        <Products />
      </div>
    );
}
export default Main