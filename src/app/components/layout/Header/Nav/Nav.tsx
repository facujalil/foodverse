"use client";

import style from "./Nav.module.css";
import { usePathname } from "next/navigation";
import { useRecipesContext } from "@/app/context/RecipesContext";
import Link from "next/link";

function Nav() {
  const pathname = usePathname();

  const { favouriteRecipeList } = useRecipesContext();

  return (
    <nav className={style.nav}>
      <Link href="/" className={pathname === "/" ? style.active : undefined}>
        Home
      </Link>
      <Link
        href="/favourites"
        className={pathname === "/favourites" ? style.active : undefined}
      >
        Favourites <span>({favouriteRecipeList.length})</span>
      </Link>
    </nav>
  );
}

export default Nav;
