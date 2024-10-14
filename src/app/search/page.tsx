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

  const recipeList: Recipe[] = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${q}`
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
    <div className={style.search}>
      {recipeList.length > 0 ? (
        <RecipeList recipeList={recipeList} />
      ) : (
        <Message error={true} message="No recipe found!" />
      )}
    </div>
  );
}

export default Page;
