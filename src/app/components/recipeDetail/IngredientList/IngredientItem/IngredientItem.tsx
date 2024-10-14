import style from "./IngredientItem.module.css";
import { TiTick } from "react-icons/ti";

interface Props {
  ingredient: string;
}

function IngredientItem({ ingredient }: Props) {
  return (
    <li className={style.ingredientItem}>
      <TiTick />
      <p>{ingredient}</p>
    </li>
  );
}

export default IngredientItem;
