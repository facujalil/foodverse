import style from "./page.module.css";
import { RecipeDetail } from "../types";
import Link from "next/link";
import ToggleFavouritesButton from "../components/recipeDetail/ToggleFavouritesButton/ToggleFavouritesButton";
import RecipeImage from "../components/common/RecipeImage/RecipeImage";
import { GiKnifeFork } from "react-icons/gi";
import IngredientList from "../components/recipeDetail/IngredientList/IngredientList";
import Message from "../components/common/Message/Message";

interface Props {
  params: {
    recipeId: string;
  };
}

async function page({ params }: Props) {
  const { recipeId } = params;

  const recipeDetail: RecipeDetail | null = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText || "Something went wrong");
      }
      return res.json();
    })
    .then(({ data }) => data.recipe)
    .catch((error) => {
      console.error(error);
      return null;
    });

  return (
    <div className={style.recipeDetail}>
      {recipeDetail ? (
        <>
          <div className={style.recipeDetailMainContainer}>
            <div className={style.mainContainerImgSection}>
              <RecipeImage
                src={recipeDetail.image_url}
                alt={recipeDetail.title}
              />
            </div>
            <div className={style.mainContainerInfoSection}>
              <p>{recipeDetail.publisher}</p>
              <h1>{recipeDetail.title}</h1>
              <div className={style.infoSectionActions}>
                <ToggleFavouritesButton recipeDetail={recipeDetail} />
                <Link href={recipeDetail.source_url} target="_blank">
                  Get directions
                </Link>
                <Link href="/">Back to home</Link>
              </div>
            </div>
          </div>
          <div className={style.recipeDetailIngredients}>
            <div className={style.ingredientsHeader}>
              <GiKnifeFork />
              <h2>Ingredients:</h2>
            </div>
            <hr />
            <IngredientList ingredientList={recipeDetail.ingredients} />
          </div>
        </>
      ) : (
        <Message error={true} message="No recipe found!" />
      )}
    </div>
  );
}

export default page;
