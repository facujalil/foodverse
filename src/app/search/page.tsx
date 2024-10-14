import style from "./page.module.css";
import { Recipe } from "../types";
import RecipeList from "../components/common/RecipeList/RecipeList";
import Message from "../components/common/Message/Message";

interface Props {
  searchParams: {
    q: string;
  };
}

async function Page({ searchParams }: Props) {
  const { q } = searchParams;

  const recipeList: Recipe[] | null = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    })
    .then((data) => data.meals)
    .catch((error) => {
      console.error(error);
      return null;
    });

  return (
    <div className={style.search}>
      {recipeList && recipeList.length > 0 ? (
        <RecipeList recipeList={recipeList} />
      ) : (
        <Message error={true} message="No recipe found!" />
      )}
    </div>
  );
}

export default Page;
