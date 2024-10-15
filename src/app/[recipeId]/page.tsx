import style from "./page.module.css";
import { RecipeDetail } from "../types";
import { MdPersonOutline } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";
import RecipeImage from "../components/common/RecipeImage/RecipeImage";
import ToggleFavouritesButton from "../components/recipeDetail/ToggleFavouritesButton/ToggleFavouritesButton";
import IngredientList from "../components/recipeDetail/IngredientList/IngredientList";
import Message from "../components/common/Message/Message";
import Link from "next/link";

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

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0 && remainingMinutes > 0) {
      return `${hours}h${remainingMinutes}min`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${remainingMinutes}min`;
    }
  };

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
              <div className={style.infoSectionDetails}>
                <p>
                  <MdPersonOutline /> Servings (people): {recipeDetail.servings}
                </p>
                <p>
                  <IoMdStopwatch /> Cooking time:{" "}
                  {formatTime(recipeDetail.cooking_time)}
                </p>
              </div>
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
