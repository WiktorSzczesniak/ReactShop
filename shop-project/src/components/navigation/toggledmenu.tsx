import Link from "next/link";
function Togglemenu(props) {
    const menulinks = [
      { title: "Profile", link: "https://www.youtube.com/" },
      { title: "Cart", link: "https://www.youtube.com/" },
      { title: "Electronics", link: "/category/electronics" },
      { title: "Jewelery", link: "/category/jewelery" },
      { title: "Clothing", link: "/category/Clothing" },
      { title: "Man's Clothing", link: "/category/men's%20clothing" },
      { title: "Woman's Clorthing", link: "/category/women's%20clothing" },
    ];
   
  return (
    <div className="toggled-menu">
      <ul>
        {menulinks.map((links) => (
          <li>
            <Link href={links.link} onClick={props.OnClick}>
              • {links.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Togglemenu;
