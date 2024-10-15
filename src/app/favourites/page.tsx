"use client";

import style from "./page.module.css";
import { useRecipes } from "../context/RecipesContext";
import Message from "../components/common/Message/Message";
import RecipeList from "../components/common/RecipeList/RecipeList";

function Page() {
  const { favouriteRecipeList } = useRecipes();

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
