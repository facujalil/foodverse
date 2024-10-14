import style from "./IngredientList.module.css";
import { Ingredient } from "@/app/types";
import IngredientItem from "./IngredientItem/IngredientItem";

interface Props {
  ingredientList: Ingredient[];
}

function IngredientList({ ingredientList }: Props) {
  return (
    <ul className={style.ingredientList}>
      {ingredientList.map((ingredient, index) => (
        <IngredientItem key={index} ingredient={ingredient} />
      ))}
    </ul>
  );
}

export default IngredientList;
