"use client";

import React from "react";
import style from "./Nav.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import FavouriteRecipesAmount from "../FavouriteRecipesAmount/FavouriteRecipesAmount";

function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className={pathname === "/" ? style.active : ""}>
        Home
      </Link>
      <Link
        href="/favourites"
        className={pathname === "/favourites" ? style.active : ""}
      >
        Favourites <FavouriteRecipesAmount />
      </Link>
    </nav>
  );
}

export default Nav;
