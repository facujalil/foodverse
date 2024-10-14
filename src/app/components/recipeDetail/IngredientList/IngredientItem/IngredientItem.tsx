import style from "./IngredientItem.module.css";
import { Ingredient } from "@/app/types";
import { TiTick } from "react-icons/ti";

interface Props {
  ingredient: Ingredient;
}

function IngredientItem({ ingredient }: Props) {
  return (
    <li className={style.ingredientItem}>
      <TiTick />
      <p>
        {[ingredient.quantity, ingredient.unit, ingredient.description]
          .filter(Boolean)
          .join(" ")}
      </p>
    </li>
  );
}

export default IngredientItem;
