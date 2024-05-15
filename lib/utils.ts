import { recipes } from "@/data";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRecipe(id: number | string) {
  return recipes.find((recipe) => recipe.id == id);
}
