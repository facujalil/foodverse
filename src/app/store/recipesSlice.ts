import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../types";

interface InitialState {
  favouriteRecipeList: Recipe[];
}

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    favouriteRecipeList: [],
  } as InitialState,
  reducers: {
    addAsFavourite: (state, action: PayloadAction<Recipe>) => {
      state.favouriteRecipeList = [
        ...state.favouriteRecipeList,
        action.payload,
      ];
    },
    removeFromFavourites: (state, action: PayloadAction<string>) => {
      state.favouriteRecipeList = state.favouriteRecipeList.filter(
        (recipe) => recipe.id !== action.payload
      );
    },
  },
});

export const { addAsFavourite, removeFromFavourites } = recipesSlice.actions;
