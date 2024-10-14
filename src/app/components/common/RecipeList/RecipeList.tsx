import style from "./RecipeList.module.css";
import { Recipe } from "@/app/types";
import RecipeCard from "./RecipeCard/RecipeCard";

interface Props {
  recipeList: Recipe[];
}

function RecipeList({ recipeList }: Props) {
  return (
    <div className={style.recipeList}>
      {recipeList.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
