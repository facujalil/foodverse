import React from "react";
import style from "./page.module.css";
import { RecipeDetail } from "../types";
import Link from "next/link";
import { GiKnifeFork } from "react-icons/gi";
import HandleFavouritesButton from "../components/HandleFavouritesButton/HandleFavouritesButton";
import RecipeImage from "../components/RecipeImage/RecipeImage";
import IngredientList from "../components/IngredientList/IngredientList";

interface Props {
  params: {
    recipeId: string;
  };
}

async function page({ params }: Props) {
  const { recipeId } = params;

  const recipeDetail: { meals: [RecipeDetail] } = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  ).then((res) => res.json());

  return (
    <div className={style.recipeDetail}>
      <div className={style.recipeDetailMainContainer}>
        <div className={style.mainContainerInfoSection}>
          <div className={style.infoSectionHeader}>
            <p className={style.infoSectionCategory}>
              {recipeDetail.meals[0].strCategory}
            </p>
            <HandleFavouritesButton recipeDetail={recipeDetail.meals[0]} />
          </div>
          <h1>{recipeDetail.meals[0].strMeal}</h1>
          <div className={style.infoSectionNavigation}>
            <Link href="/">Back to home</Link>
            <Link
              href={
                recipeDetail.meals[0].strSource
                  ? recipeDetail.meals[0].strSource
                  : recipeDetail.meals[0].strYoutube
              }
              target="_blank"
            >
              Get directions
            </Link>
          </div>
        </div>
        <div className={style.mainContainerImgSection}>
          <RecipeImage
            src={recipeDetail.meals[0].strMealThumb}
            alt={recipeDetail.meals[0].strMeal}
            style={{ width: "100%", height: "100%", maxHeight: "28.5rem" }}
          />
        </div>
      </div>
      <div className={style.recipeDetailIngredients}>
        <div className={style.recipeDetailIngredientsHeader}>
          <i>
            <GiKnifeFork />
          </i>
          <h2>Ingredients:</h2>
        </div>
        <hr />
        <IngredientList recipeDetail={recipeDetail} />
      </div>
    </div>
  );
}

export default page;
