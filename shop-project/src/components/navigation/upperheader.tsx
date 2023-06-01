import Link from "next/link";

function Upperheader() {
  return (
    <div className="upperheader">
      <div className="logo">
        <Link href="/">ReactShop</Link>
      </div>
      <div className="interface">
        <a href="https://www.youtube.com/">Login</a>
        <a href="https://www.youtube.com/">Cart</a>
      </div>
    </div>
  );
}

export default Upperheader;
