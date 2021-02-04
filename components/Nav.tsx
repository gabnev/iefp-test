import Link from "next/link";
import navStyle from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className={navStyle.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/pets">Pets</Link>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
