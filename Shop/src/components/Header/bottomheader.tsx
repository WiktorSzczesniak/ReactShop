import DetailsBottomheader from "./DetailsBottomheader";
import { useState } from "react";
function Bottomheader() {
  const [isShown, setIsShown] = useState(false);


  return (
    <div className="bottomheader">
      <ul>
        <li
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <a href="https://www.youtube.com/">Clothing</a>
          {isShown && <DetailsBottomheader />}
        </li>
        <li>
          <a href="https://www.youtube.com/">Jewelery</a>
        </li>
        <li>
          <a href="https://www.youtube.com/">Electronics</a>
        </li>
      </ul>
    </div>
  );
}

export default Bottomheader;
