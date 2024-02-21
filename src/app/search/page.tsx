import React from "react";
import style from "./page.module.css";
import { Recipe } from "../types";
import RecipeList from "../components/RecipeList/RecipeList";
import Message from "../components/Message/Message";

interface Props {
  searchParams: {
    q: string;
  };
}

async function Page({ searchParams }: Props) {
  const { q } = searchParams;

  const recipeList: { meals: [Recipe] } = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
  ).then((res) => res.json());

  return (
    <div className={style.search}>
      {recipeList.meals && recipeList.meals.length > 0 ? (
        <RecipeList recipeList={recipeList.meals} />
      ) : (
        <Message error={true} message="No recipe found!" />
      )}
    </div>
  );
}

export default Page;
