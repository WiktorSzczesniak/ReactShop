import DetailsBottomheader from "./DetailsBottomheader";
import { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import headerSlice, {headerActions} from "@/store/header-slice";
function Bottomheader() {
  const dispatch = useDispatch();
  const showdetails = useSelector((state) => state.header.detailsbottomIsShown);


  return (
    <div className="bottomheader">
      <ul>
        <li
          onMouseEnter={() => dispatch(headerActions.visible())}
          onMouseLeave={() => dispatch(headerActions.hide())}

        >
          <Link href={`/category/Clothing`}>Clothing</Link>
          {showdetails && <DetailsBottomheader />}
        </li>
        <li>
          <Link href={`/category/jewelery`}>Jewelery</Link>
        </li>
        <li>
          <Link href={`/category/electronics`}>Electronics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Bottomheader;
