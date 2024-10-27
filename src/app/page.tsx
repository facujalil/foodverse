"use client";

import style from "./page.module.css";
import { useRecipesContext } from "./context/RecipesContext";
import RecipeSearch from "./components/home/RecipeSearch/RecipeSearch";
import Message from "./components/common/Message/Message";
import Cooking from "./components/common/Cooking/Cooking";

function Page() {
  const { searchRecipe } = useRecipesContext();

  return (
    <div className={style.home}>
      {searchRecipe ? (
        <RecipeSearch searchRecipe={searchRecipe} />
      ) : (
        <>
          <Message message="Nothing to show, please search something!" />
          <Cooking />
        </>
      )}
    </div>
  );
}

export default Page;
