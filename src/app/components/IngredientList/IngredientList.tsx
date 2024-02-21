import React from "react";
import style from "./IngredientList.module.css";
import { RecipeDetail } from "@/app/types";
import IngredientItem from "../IngredientItem/IngredientItem";

interface Props {
  recipeDetail: {
    meals: RecipeDetail[];
  };
}

function IngredientList({ recipeDetail }: Props) {
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    if (recipeDetail.meals[0][`strIngredient${i}`]) {
      ingredients.push(
        `${recipeDetail.meals[0][`strIngredient${i}`]} (${
          recipeDetail.meals[0][`strMeasure${i}`]
        })`
      );
    } else {
      break;
    }
  }

  return (
    <ul className={style.ingredientList}>
      {ingredients.map((ingredient, index) => (
        <IngredientItem key={index} ingredient={ingredient} />
      ))}
    </ul>
  );
}

export default IngredientList;
