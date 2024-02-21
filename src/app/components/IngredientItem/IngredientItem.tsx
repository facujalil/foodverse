import React from "react";
import { TiTick } from "react-icons/ti";

interface Props {
  ingredient: string;
}

function IngredientItem({ ingredient }: Props) {
  return (
    <li>
      <i>
        <TiTick />
      </i>
      <p>{ingredient}</p>
    </li>
  );
}

export default IngredientItem;
