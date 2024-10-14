import style from "./RecipeCard.module.css";
import { Recipe } from "@/app/types";
import RecipeImage from "../../RecipeImage/RecipeImage";
import Link from "next/link";

interface Props {
  recipe: Recipe;
}

function RecipeCard({ recipe }: Props) {
  return (
    <div className={style.recipeCard}>
      <div className={style.recipeCardImgContainer}>
        <RecipeImage src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <p>{recipe.strCategory}</p>
      <h3>{recipe.strMeal}</h3>
      <Link href={`/${recipe.idMeal}`} as={recipe.idMeal}>
        View recipe
      </Link>
    </div>
  );
}

export default RecipeCard;
