import Link from "next/link";
function Togglemenu(props) {
    const menulinks = [
      { title: "Profile", link: "/login" },
      { title: "Electronics", link: "/category/electronics" },
      { title: "Jewelery", link: "/category/jewelery" },
      { title: "Clothing", link: "/category/Clothing" },
      { title: "Man's Clothing", link: "/category/men's%20clothing" },
      { title: "Woman's Clothing", link: "/category/women's%20clothing" },
    ];
   
  return (
    <div className="toggled-menu">
      <ul onClick={props.OnClick}>
        {menulinks.map((links) => (
          <div className="link-bar" >
            <li>
              <Link href={links.link}>• {links.title}</Link>
            </li>
          </div>
        ))}
        <p className="cartmedia" onClick={props.hideModal}> • Cart</p>
      </ul>
    </div>
  );
}

export default Togglemenu;
