// import "./DetailsBottomHeader.css";
import Link from "next/link";
function DetailsBottomheader() {
  return (
    <div className="Categories">
      <ul>
        <li>
          <Link href="/Clothing/Man">• Man's Clothing</Link>
        </li>
        <li>
          <Link href="/Clothing/Woman">• Woman's Clorthing</Link>
        </li>
      </ul>
    </div>
  );
}

export default DetailsBottomheader;
