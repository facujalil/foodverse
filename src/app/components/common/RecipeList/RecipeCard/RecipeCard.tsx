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
        <RecipeImage src={recipe.image_url} alt={recipe.title} />
      </div>
      <p>{recipe.publisher}</p>
      <h3>{recipe.title}</h3>
      <Link href={`/${recipe.id}`} as={recipe.id}>
        View recipe
      </Link>
    </div>
  );
}

export default RecipeCard;
