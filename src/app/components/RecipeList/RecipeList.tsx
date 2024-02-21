import React from "react";
import style from "./RecipeList.module.css";
import { Recipe } from "@/app/types";
import RecipeItem from "../RecipeItem/RecipeItem";

interface Props {
  recipeList: Recipe[];
}

function RecipeList({ recipeList }: Props) {
  return (
    <div className={style.recipeList}>
      {recipeList.map((recipe) => (
        <RecipeItem key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
