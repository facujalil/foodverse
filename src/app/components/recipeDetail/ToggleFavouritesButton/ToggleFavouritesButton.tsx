"use client";

import { useRef } from "react";
import { RecipeDetail } from "@/app/types";
import { useRecipesContext } from "@/app/context/RecipesContext";
import { useRouter } from "next/navigation";

interface Props {
  recipeDetail: RecipeDetail;
}

function ToggleFavouritesButton({ recipeDetail }: Props) {
  const { favouriteRecipeList, setFavouriteRecipeList } = useRecipesContext();

  const isFavourited = useRef(
    favouriteRecipeList.filter((recipe) => recipe.id === recipeDetail.id)
      .length > 0
  );
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const router = useRouter();

  const toggleFavourites = (isFavourited: boolean) => {
    if (isFavourited) {
      setFavouriteRecipeList((state) =>
        state.filter((item) => item.id !== recipeDetail.id)
      );
    } else {
      setFavouriteRecipeList((state) => [...state, recipeDetail]);
    }

    if (buttonRef.current) {
      buttonRef.current.disabled = true;
    }

    router.push("../favourites");
  };

  return (
    <button
      ref={buttonRef}
      onClick={() => toggleFavourites(isFavourited.current)}
      style={{
        background: isFavourited.current
          ? "linear-gradient(to bottom right, rgb(251, 146, 60) 35%, rgb(234, 88, 12) 100%)"
          : "linear-gradient(to bottom right, rgb(56, 189, 248) 35%, rgb(2, 132, 199) 100%)",
      }}
    >
      {isFavourited.current
        ? "- Remove from favourites"
        : "+ Save as favourite"}
    </button>
  );
}

export default ToggleFavouritesButton;
