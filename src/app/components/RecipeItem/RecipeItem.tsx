import React from "react";
import style from "./RecipeItem.module.css";
import { Recipe } from "@/app/types";
import RecipeImage from "../RecipeImage/RecipeImage";
import Link from "next/link";

interface Props {
  recipe: Recipe;
}

function RecipeItem({ recipe }: Props) {
  return (
    <div className={style.recipeItem}>
      {
        <RecipeImage
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          style={{ width: "100%", height: "10rem" }}
        />
      }
      <p className={style.recipeItemCategory}>{recipe.strCategory}</p>
      <h3>{recipe.strMeal}</h3>
      <Link href={`/${recipe.idMeal}`} as={recipe.idMeal}>
        View recipe
      </Link>
    </div>
  );
}

export default RecipeItem;
