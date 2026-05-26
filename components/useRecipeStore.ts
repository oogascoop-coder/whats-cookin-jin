"use client";

import { useEffect, useState } from "react";
import { Recipe } from "@/lib/types";
import {
  getGroceryItems,
  getRecipes,
  makeGroceryItem,
  saveGroceryItems,
  saveRecipes,
  upsertRecipe
} from "@/lib/storage";

export function useRecipeStore() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    setRecipes(getRecipes());
  }, []);

  function persist(nextRecipes: Recipe[]) {
    setRecipes(nextRecipes);
    saveRecipes(nextRecipes);
  }

  function saveRecipe(recipe: Recipe) {
    const nextRecipes = upsertRecipe(recipes, recipe);
    persist(nextRecipes);
    setFormOpen(false);
    setEditingRecipe(null);
  }

  function openRecipe(recipe: Recipe) {
    const viewedRecipe = { ...recipe, viewedAt: new Date().toISOString() };
    const nextRecipes = upsertRecipe(recipes, viewedRecipe);
    persist(nextRecipes);
    setActiveRecipe(viewedRecipe);
  }

  function toggleFavorite(recipe: Recipe) {
    const nextRecipe = { ...recipe, favorite: !recipe.favorite, updatedAt: new Date().toISOString() };
    const nextRecipes = upsertRecipe(recipes, nextRecipe);
    persist(nextRecipes);
    setActiveRecipe((current) => (current?.id === recipe.id ? nextRecipe : current));
  }

  function toggleBookmark(recipe: Recipe) {
    const nextRecipe = { ...recipe, bookmarked: !recipe.bookmarked, updatedAt: new Date().toISOString() };
    const nextRecipes = upsertRecipe(recipes, nextRecipe);
    persist(nextRecipes);
    setActiveRecipe((current) => (current?.id === recipe.id ? nextRecipe : current));
  }

  function moveToTrash(recipe: Recipe) {
    const nextRecipe = { ...recipe, deleted: true, updatedAt: new Date().toISOString() };
    persist(upsertRecipe(recipes, nextRecipe));
    setActiveRecipe(null);
  }

  function restoreRecipe(recipe: Recipe) {
    persist(upsertRecipe(recipes, { ...recipe, deleted: false, updatedAt: new Date().toISOString() }));
  }

  function deleteForever(recipe: Recipe) {
    persist(recipes.filter((item) => item.id !== recipe.id));
    setActiveRecipe((current) => (current?.id === recipe.id ? null : current));
  }

  function startNewRecipe() {
    setEditingRecipe(null);
    setFormOpen(true);
  }

  function startEditRecipe(recipe: Recipe) {
    setEditingRecipe(recipe);
    setFormOpen(true);
  }

  function addIngredientsToGrocery(recipe: Recipe) {
    const currentItems = getGroceryItems();
    const existingLabels = new Set(currentItems.map((item) => item.label));
    const newItems = recipe.ingredients
      .filter((ingredient) => !existingLabels.has(ingredient))
      .map((ingredient) => makeGroceryItem(ingredient));

    saveGroceryItems([...newItems, ...currentItems]);
  }

  return {
    recipes,
    activeRecipe,
    editingRecipe,
    formOpen,
    setActiveRecipe,
    setFormOpen,
    saveRecipe,
    openRecipe,
    toggleFavorite,
    toggleBookmark,
    moveToTrash,
    restoreRecipe,
    deleteForever,
    startNewRecipe,
    startEditRecipe,
    addIngredientsToGrocery
  };
}
