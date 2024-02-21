"use client";

import React from "react";
import style from "./FavouriteRecipesAmount.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

function FavouriteRecipesAmount() {
  const amount = useSelector(
    (state: RootState) => state.recipes.favouriteRecipeList
  );

  return <span className={style.amount}>({amount ? amount.length : 0})</span>;
}

export default FavouriteRecipesAmount;
