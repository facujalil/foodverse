export interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  [key: `strIngredient${number}`];
  [key: `strMeasure${number}`];
}

export interface RecipeDetail extends Recipe {
  strYoutube: string;
  strSource: string;
}
