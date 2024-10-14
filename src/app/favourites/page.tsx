"use client";

import style from "./page.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Message from "../components/common/Message/Message";
import RecipeList from "../components/common/RecipeList/RecipeList";

function Page() {
  const favouriteRecipeList = useSelector(
    (state: RootState) => state.recipes.favouriteRecipeList
  );

  return (
    <div className={style.favourites}>
      {favouriteRecipeList.length > 0 ? (
        <>
          <Message
            message={
              favouriteRecipeList.length === 1
                ? "Your favourite recipe!"
                : "Your favourite recipes!"
            }
          />
          <RecipeList recipeList={favouriteRecipeList} />
        </>
      ) : (
        <Message message="Your favourite list is empty!" />
      )}
    </div>
  );
}

export default Page;
