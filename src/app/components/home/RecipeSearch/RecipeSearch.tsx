import { Recipe } from "@/app/types";
import RecipeList from "../../common/RecipeList/RecipeList";
import Message from "../../common/Message/Message";

interface Props {
  searchRecipe: string;
}

async function RecipeSearch({ searchRecipe }: Props) {
  const recipeList: Recipe[] = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchRecipe}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText || "Something went wrong");
      }
      return res.json();
    })
    .then(({ data }) => data.recipes)
    .catch((error) => {
      console.error(error);
      return [];
    });

  return (
    <>
      {recipeList.length > 0 ? (
        <RecipeList recipeList={recipeList} />
      ) : (
        <Message error={true} message="No recipe found!" />
      )}
    </>
  );
}

export default RecipeSearch;
