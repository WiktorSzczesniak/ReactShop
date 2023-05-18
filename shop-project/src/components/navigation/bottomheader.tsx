import DetailsBottomheader from "./DetailsBottomheader";
import { useState } from "react";
import Link from "next/link";
function Bottomheader() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="bottomheader">
      <ul>
        <li
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <Link href="/Clothing">Clothing</Link>
          {isShown && <DetailsBottomheader />}
        </li>
        <li>
          <Link href="/Jewelery">Jewelery</Link>
        </li>
        <li>
          <Link href="/Electronics">Electronics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Bottomheader;
