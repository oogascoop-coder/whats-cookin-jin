"use client";

import { useEffect, useMemo, useState } from "react";
import { RotateCcw, Trash2 } from "lucide-react";
import { dietGoals } from "@/data/recipes";
import { CategoryChips } from "@/components/CategoryChips";
import { EmptyState } from "@/components/EmptyState";
import { IngredientSelector } from "@/components/IngredientSelector";
import { RecipeFormModal } from "@/components/RecipeFormModal";
import { RecipeGrid } from "@/components/RecipeGrid";
import { RecipeModal } from "@/components/RecipeModal";
import { TopBar } from "@/components/TopBar";
import { useRecipeStore } from "@/components/useRecipeStore";
import { dietGoalLabel } from "@/lib/labels";
import {
  filterByCategory,
  filterByIngredients,
  madeRecipes,
  recentRecipes,
  searchRecipes,
  visibleRecipes
} from "@/lib/recipe-utils";
import { getSavedIngredients, saveSavedIngredients } from "@/lib/storage";

type CollectionMode =
  | "my-recipes"
  | "ingredients"
  | "categories"
  | "diet-goals"
  | "favorites"
  | "recent"
  | "trash";

const pageCopy: Record<CollectionMode, { title: string; description: string }> = {
  "my-recipes": {
    title: "내 레시피",
    description: "인스타그램, 유튜브, 블로그, 직접 입력으로 저장한 레시피를 모아봤어요."
  },
  ingredients: {
    title: "재료로 찾기",
    description: "냉장고에 있는 재료를 고르면 만들 수 있는 레시피만 보여드려요."
  },
  categories: {
    title: "카테고리",
    description: "한식, 간단 요리, 샐러드, 국물 요리, 간식까지 카테고리별로 찾아요."
  },
  "diet-goals": {
    title: "식단 목표",
    description: "가볍게 먹고 싶은 날, 단백질이 필요한 날에 맞춰 찾아요."
  },
  favorites: {
    title: "만들어본 레시피",
    description: "체크해둔 레시피를 모아두고 다시 만들 때 참고해요."
  },
  recent: {
    title: "최근 본 레시피",
    description: "최근에 열어본 레시피를 최신순으로 보여드려요."
  },
  trash: {
    title: "휴지통",
    description: "삭제한 레시피는 완전히 지우기 전까지 이곳에 잠시 보관돼요."
  }
};

type RecipeCollectionPageProps = {
  mode: CollectionMode;
};

export function RecipeCollectionPage({ mode }: RecipeCollectionPageProps) {
  const store = useRecipeStore();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDietGoal, setSelectedDietGoal] = useState<string | null>(null);
  const [savedIngredients, setSavedIngredients] = useState<string[]>(["오이", "달걀", "두부", "양파", "대파"]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(mode === "ingredients" ? ["오이"] : []);

  useEffect(() => {
    setSavedIngredients(getSavedIngredients());
  }, []);

  const recipes = useMemo(() => {
    if (mode === "trash") {
      return store.recipes.filter((recipe) => recipe.deleted);
    }

    let nextRecipes = visibleRecipes(store.recipes);

    if (mode === "favorites") nextRecipes = madeRecipes(store.recipes);
    if (mode === "recent") nextRecipes = recentRecipes(store.recipes);
    if (mode === "categories") nextRecipes = filterByCategory(nextRecipes, selectedCategory);
    if (mode === "diet-goals" && selectedDietGoal) {
      nextRecipes = nextRecipes.filter((recipe) => recipe.dietGoal === selectedDietGoal);
    }
    if (mode === "ingredients") nextRecipes = filterByIngredients(nextRecipes, selectedIngredients);

    return searchRecipes(nextRecipes, query);
  }, [store.recipes, mode, selectedCategory, selectedDietGoal, selectedIngredients, query]);

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

  const copy = pageCopy[mode];

  return (
    <>
      <TopBar searchValue={query} onSearchChange={setQuery} onNewRecipe={store.startNewRecipe} />

      <header className="mb-9 rounded-none border border-[#eadfcd] bg-white p-6 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato-600">레시피 보관함</p>
        <h1 className="recipe-display mt-2 text-5xl text-cocoa">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#7b6a5f]">{copy.description}</p>
      </header>

      {mode === "ingredients" ? (
        <div className="mb-6">
          <IngredientSelector
            ingredients={savedIngredients}
            selected={selectedIngredients}
            onToggle={toggleIngredient}
            onAdd={addIngredient}
          />
        </div>
      ) : null}

      {mode === "categories" ? (
        <div className="mb-6">
          <CategoryChips selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>
      ) : null}

      {mode === "diet-goals" ? (
        <div className="mb-6 flex flex-wrap gap-2">
          <button className={`chip ${!selectedDietGoal ? "chip-active" : ""}`} type="button" aria-label="전체 식단 목표 보기" onClick={() => setSelectedDietGoal(null)}>
            전체
          </button>
          {dietGoals.map((goal) => (
            <button
              key={goal}
              className={`chip ${selectedDietGoal === goal ? "chip-active" : ""}`}
              type="button"
              aria-label={`${dietGoalLabel(goal)} 식단 목표로 필터링`}
              onClick={() => setSelectedDietGoal(goal)}
            >
              {dietGoalLabel(goal)}
            </button>
          ))}
        </div>
      ) : null}

      {mode === "trash" ? (
        <TrashRecipes
          recipes={recipes}
          onRestore={store.restoreRecipe}
          onDeleteForever={store.deleteForever}
        />
      ) : (
        <RecipeGrid
          recipes={recipes}
          emptyTitle="레시피를 찾지 못했어요"
          emptyDescription="검색어나 필터를 바꾸거나 새 레시피를 추가해보세요."
          onOpen={store.openRecipe}
          onToggleFavorite={store.toggleFavorite}
        />
      )}

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

type TrashRecipesProps = {
  recipes: ReturnType<typeof visibleRecipes>;
  onRestore: (recipe: ReturnType<typeof visibleRecipes>[number]) => void;
  onDeleteForever: (recipe: ReturnType<typeof visibleRecipes>[number]) => void;
};

function TrashRecipes({ recipes, onRestore, onDeleteForever }: TrashRecipesProps) {
  if (recipes.length === 0) {
    return <EmptyState title="휴지통이 비어 있어요" description="삭제한 레시피는 완전히 지우기 전까지 여기에 표시돼요." />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {recipes.map((recipe) => (
        <article key={recipe.id} className="soft-card p-5">
          <p className="recipe-display text-2xl text-cocoa">{recipe.title}</p>
          <p className="mt-2 text-sm text-[#7b6a5f]">{recipe.category} · {recipe.time}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button className="secondary-button" type="button" aria-label={`${recipe.title} 복원`} onClick={() => onRestore(recipe)}>
              <RotateCcw size={17} aria-hidden="true" />
              복원
            </button>
            <button className="secondary-button text-tomato-600" type="button" aria-label={`${recipe.title} 완전 삭제`} onClick={() => onDeleteForever(recipe)}>
              <Trash2 size={17} aria-hidden="true" />
              완전 삭제
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
