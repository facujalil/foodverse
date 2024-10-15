import { Recipe } from "../types";

export const getItem = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setItem = (key: string, data: Recipe[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};
