import style from "./Header.module.css";
import Link from "next/link";
import SearchForm from "./Nav/SearchForm/SearchForm";
import Nav from "./Nav/Nav";

function Header() {
  return (
    <header className={style.header}>
      <Link href="/" className={style.logo}>
        food<span>verse</span>
      </Link>
      <SearchForm />
      <Nav />
    </header>
  );
}

export default Header;
