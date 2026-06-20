"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { CategoryChips } from "@/components/CategoryChips";
import { FavoritesPanel } from "@/components/FavoritesPanel";
import { IngredientSelector } from "@/components/IngredientSelector";
import { RecipeFormModal } from "@/components/RecipeFormModal";
import { RecipeGrid } from "@/components/RecipeGrid";
import { RecipeModal } from "@/components/RecipeModal";
import { TopBar } from "@/components/TopBar";
import { useRecipeStore } from "@/components/useRecipeStore";
import { filterByCategory, filterByIngredients, madeRecipes, searchRecipes, visibleRecipes } from "@/lib/recipe-utils";
import { getSavedIngredients, saveSavedIngredients } from "@/lib/storage";

export function HomePage() {
  const store = useRecipeStore();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [savedIngredients, setSavedIngredients] = useState<string[]>(["오이", "달걀", "두부", "양파", "대파"]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(["오이"]);

  useEffect(() => {
    setSavedIngredients(getSavedIngredients());
  }, []);

  const filteredRecipes = useMemo(() => {
    const visible = visibleRecipes(store.recipes);
    const searched = searchRecipes(visible, query);
    const byCategory = filterByCategory(searched, selectedCategory);
    return filterByIngredients(byCategory, selectedIngredients);
  }, [store.recipes, query, selectedCategory, selectedIngredients]);

  const made = useMemo(() => madeRecipes(store.recipes), [store.recipes]);

  function toggleIngredient(ingredient: string) {
    setSelectedIngredients((current) =>
      current.includes(ingredient) ? current.filter((item) => item !== ingredient) : [...current, ingredient]
    );
  }

  function addIngredient(ingredient: string) {
    if (savedIngredients.includes(ingredient)) return;
    const next = [...savedIngredients, ingredient];
    setSavedIngredients(next);
    saveSavedIngredients(next);
    setSelectedIngredients((current) => [...current, ingredient]);
  }

  return (
    <>
      <TopBar searchValue={query} onSearchChange={setQuery} onNewRecipe={store.startNewRecipe} />

      <section className="mb-8 grid gap-6 overflow-hidden rounded-none border border-[#eadfcd] bg-white p-6 shadow-soft md:grid-cols-[1.1fr_0.9fr] md:p-8">
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-tomato-600 shadow-card">
            <Sparkles size={16} aria-hidden="true" />
            Personal recipe box
          </span>
          <h1 className="font-serif text-5xl leading-tight text-cocoa md:text-6xl">What are we cooking today?</h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-[#6f6259]">
            Find recipes with what you have, mark what you&apos;ve cooked, and cook with ease.
          </p>
          <div className="mt-6">
            <Link className="primary-button" href="/ingredients">
              Find recipes with my ingredients
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-72 overflow-hidden rounded-none border border-[#eadfcd] bg-white p-3 shadow-card">
          {/* Home hero image: swap this file to change the large visual. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/recipe-media/hero-meme-green.jpg"
            alt=""
            className="h-full min-h-72 w-full rounded-none object-cover"
          />
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="recipe-display text-3xl text-cocoa">카테고리로 보기</h2>
            <p className="mt-1 text-sm text-[#7b6a5f]">칩을 누르면 해당 카테고리만 보여요.</p>
          </div>
        </div>
        <CategoryChips selected={selectedCategory} onSelect={setSelectedCategory} />
      </section>

      <div className="mb-8 grid gap-6 xl:grid-cols-[1fr_360px]">
        <IngredientSelector
          ingredients={savedIngredients}
          selected={selectedIngredients}
          onToggle={toggleIngredient}
          onAdd={addIngredient}
        />
        <FavoritesPanel
          recipes={made}
          onOpen={store.openRecipe}
          onToggleFavorite={store.toggleFavorite}
        />
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="recipe-display text-3xl text-cocoa">레시피 카드</h2>
            <p className="mt-1 text-sm text-[#7b6a5f]">{filteredRecipes.length}개 레시피를 찾았어요.</p>
          </div>
        </div>
        <RecipeGrid
          recipes={filteredRecipes}
          emptyTitle="검색 결과가 없어요"
          emptyDescription="다른 재료, 카테고리, 검색어를 입력해보세요."
          onOpen={store.openRecipe}
          onToggleFavorite={store.toggleFavorite}
        />
      </section>

      <RecipeModal
        recipe={store.activeRecipe}
        onClose={() => store.setActiveRecipe(null)}
        onEdit={store.startEditRecipe}
        onDelete={store.moveToTrash}
        onToggleFavorite={store.toggleFavorite}
        onAddIngredientsToGrocery={store.addIngredientsToGrocery}
      />
      <RecipeFormModal
        open={store.formOpen}
        recipe={store.editingRecipe}
        onClose={() => store.setFormOpen(false)}
        onSave={store.saveRecipe}
      />
    </>
  );
}
