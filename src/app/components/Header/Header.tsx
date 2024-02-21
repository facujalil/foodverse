import React from "react";
import style from "./Header.module.css";
import Link from "next/link";
import SearchForm from "../SearchForm/SearchForm";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header>
      <Link href="/" id={style.logo}>
        food<span>verse</span>
      </Link>
      <SearchForm />
      <Nav />
    </header>
  );
}

export default Header;
