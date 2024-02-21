"use client";

import React from "react";
import { RecipeDetail } from "@/app/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { addAsFavourite, removeFromFavourites } from "../../store/recipesSlice";
import { useRouter } from "next/navigation";

interface Props {
  recipeDetail: RecipeDetail;
}

function HandleFavouritesButton({ recipeDetail }: Props) {
  const dispatch = useDispatch();
  const favouriteRecipeList = useSelector(
    (state: RootState) => state.recipes.favouriteRecipeList
  );

  const router = useRouter();

  return (
    <>
      {favouriteRecipeList.filter(
        (recipe) => recipe.idMeal === recipeDetail.idMeal
      ).length > 0 ? (
        <button
          onClick={() => {
            dispatch(removeFromFavourites(recipeDetail.idMeal));
            router.push("../favourites");
          }}
          style={{
            background:
              "linear-gradient(to bottom right, rgb(251, 146, 60) 35%, rgb(234, 88, 12) 100%)",
          }}
        >
          - Remove from favourites
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(addAsFavourite(recipeDetail));
            router.push("../favourites");
          }}
          style={{
            background:
              "linear-gradient(to bottom right, rgb(56, 189, 248) 35%, rgb(2, 132, 199) 100%)",
          }}
        >
          + Save as favourite
        </button>
      )}
    </>
  );
}

export default HandleFavouritesButton;
