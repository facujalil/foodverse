import style from "./IngredientList.module.css";
import { RecipeDetail } from "@/app/types";
import IngredientItem from "./IngredientItem/IngredientItem";

interface Props {
  recipeDetail: RecipeDetail;
}

function IngredientList({ recipeDetail }: Props) {
  const ingredientList: string[] = [];

  for (let i = 1; i <= 20; i++) {
    if (recipeDetail[`strIngredient${i}`]) {
      ingredientList.push(
        `${recipeDetail[`strIngredient${i}`]} (${
          recipeDetail[`strMeasure${i}`]
        })`
      );
    } else {
      break;
    }
  }

  return (
    <ul className={style.ingredientList}>
      {ingredientList.map((ingredient, index) => (
        <IngredientItem key={index} ingredient={ingredient} />
      ))}
    </ul>
  );
}

export default IngredientList;
