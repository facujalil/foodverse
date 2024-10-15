"use client";

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
import { Recipe } from "../types";
import { getItem, setItem } from "../utils/localStorage";
import LoadingDots from "../components/common/LoadingDots/LoadingDots";

interface RecipesContext {
  favouriteRecipeList: Recipe[];
  setFavouriteRecipeList: Dispatch<SetStateAction<Recipe[]>>;
  searchRecipe: string;
  setSearchRecipe: Dispatch<SetStateAction<string>>;
}

const RecipesContext = createContext<RecipesContext | undefined>(undefined);

export const RecipesProvider = ({ children }: { children: ReactNode }) => {
  const [favouriteRecipeList, setFavouriteRecipeList] = useState<Recipe[]>([]);
  const [searchRecipe, setSearchRecipe] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localValue = getItem("favouriteRecipes");
    if (localValue) {
      setFavouriteRecipeList(localValue);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    setItem("favouriteRecipes", favouriteRecipeList);
  }, [favouriteRecipeList]);

  const value = {
    favouriteRecipeList,
    setFavouriteRecipeList,
    searchRecipe,
    setSearchRecipe,
  };

  return (
    <RecipesContext.Provider value={value}>
      {loading ? <LoadingDots /> : children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipesContext);
  if (context === undefined) {
    throw new Error("useRecipes must be used within a RecipesProvider");
  }

  return context;
};
