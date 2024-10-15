export interface Recipe {
  publisher: string;
  image_url: string;
  title: string;
  id: string;
}

export interface RecipeDetail extends Recipe {
  ingredients: Ingredient[];
  source_url: string;
  servings: number;
  cooking_time: number;
}

export interface Ingredient {
  quantity: number;
  unit: string;
  description: string;
}
