import { Recipe } from "@/lib/types";

export function makeId(prefix = "recipe") {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

export function splitByComma(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function searchRecipes(recipes: Recipe[], query: string) {
  const keyword = normalizeText(query);

  if (!keyword) return recipes;

  return recipes.filter((recipe) => {
    const searchable = [
      recipe.title,
      recipe.category,
      recipe.mealType,
      recipe.dietGoal,
      ...recipe.ingredients,
      ...recipe.tags
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(keyword);
  });
}

export function filterByCategory(recipes: Recipe[], category: string | null) {
  if (!category) return recipes;
  return recipes.filter((recipe) => recipe.category === category);
}

export function filterByIngredients(recipes: Recipe[], ingredients: string[]) {
  if (ingredients.length === 0) return recipes;
  return recipes.filter((recipe) =>
    ingredients.some((ingredient) => recipe.ingredients.includes(ingredient))
  );
}

export function visibleRecipes(recipes: Recipe[]) {
  return recipes.filter((recipe) => !recipe.deleted);
}

export function madeRecipes(recipes: Recipe[]) {
  return visibleRecipes(recipes).filter((recipe) => recipe.favorite);
}

export function recentRecipes(recipes: Recipe[]) {
  return visibleRecipes(recipes)
    .filter((recipe) => recipe.viewedAt)
    .sort((a, b) => new Date(b.viewedAt || 0).getTime() - new Date(a.viewedAt || 0).getTime());
}

export function shortIngredientLine(recipe: Recipe) {
  return recipe.ingredients.slice(0, 4).join(", ");
}

export function isVideoUrl(url?: string) {
  if (!url) return false;

  const cleanUrl = url.split("?")[0].toLowerCase();
  return [".mp4", ".webm", ".ogg", ".mov"].some((extension) => cleanUrl.endsWith(extension));
}
