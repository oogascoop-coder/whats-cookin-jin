"use client";

import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import { RecipeFormModal } from "@/components/RecipeFormModal";
import { TopBar } from "@/components/TopBar";
import { useRecipeStore } from "@/components/useRecipeStore";
import { getMealPlan, saveMealPlan } from "@/lib/storage";
import { MealPlan } from "@/lib/types";
import { visibleRecipes } from "@/lib/recipe-utils";

const days = ["월", "화", "수", "목", "금", "토", "일"];

export function MealPlanPage() {
  const store = useRecipeStore();
  const [plan, setPlan] = useState<MealPlan>({ 월: [], 화: [], 수: [], 목: [], 금: [], 토: [], 일: [] });

  useEffect(() => {
    setPlan(getMealPlan());
  }, []);

  const recipes = visibleRecipes(store.recipes);

  function persist(nextPlan: MealPlan) {
    setPlan(nextPlan);
    saveMealPlan(nextPlan);
  }

  function addRecipe(day: string, recipeId: string) {
    if (!recipeId) return;
    const current = plan[day] || [];
    if (current.includes(recipeId)) return;
    persist({ ...plan, [day]: [...current, recipeId] });
  }

  function removeRecipe(day: string, recipeId: string) {
    persist({ ...plan, [day]: (plan[day] || []).filter((id) => id !== recipeId) });
  }

  return (
    <>
      <TopBar onNewRecipe={store.startNewRecipe} />
      <header className="mb-6 rounded-none border border-[#eadfcd] bg-white p-6 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato-600">주간 식단표</p>
        <h1 className="recipe-display mt-2 text-5xl text-cocoa">이번 주 식사를 가볍게 계획해요</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#7b6a5f]">
          저장한 레시피를 요일별로 넣어두면 평일 요리가 조금 더 쉬워져요.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {days.map((day) => (
          <section key={day} className="soft-card p-5">
            <h2 className="recipe-display text-3xl text-cocoa">{day}</h2>
            <div className="mt-4 space-y-2">
              {(plan[day] || []).map((recipeId) => {
                const recipe = recipes.find((item) => item.id === recipeId);
                if (!recipe) return null;

                return (
                  <div key={recipeId} className="flex items-center justify-between gap-2 rounded-none border border-[#eadfcd] bg-white p-3">
                    <button
                      type="button"
                      className="min-w-0 text-left"
                      aria-label={`${recipe.title} 열기`}
                      onClick={() => store.openRecipe(recipe)}
                    >
                      <p className="truncate font-semibold">{recipe.title}</p>
                      <p className="text-xs text-[#7b6a5f]">{recipe.time}</p>
                    </button>
                    <button
                      type="button"
                      className="icon-button h-8 w-8"
                      aria-label={`${day}요일에서 ${recipe.title} 제거`}
                      onClick={() => removeRecipe(day, recipeId)}
                    >
                      <X size={15} aria-hidden="true" />
                    </button>
                  </div>
                );
              })}
            </div>

            <label className="mt-4 block">
              <span className="sr-only">{day}요일에 레시피 추가</span>
              <select
                className="input-field"
                defaultValue=""
                onChange={(event) => {
                  addRecipe(day, event.target.value);
                  event.currentTarget.value = "";
                }}
              >
                <option value="">레시피 추가...</option>
                {recipes.map((recipe) => (
                  <option key={recipe.id} value={recipe.id}>
                    {recipe.title}
                  </option>
                ))}
              </select>
            </label>
            <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-herb">
              <Plus size={14} aria-hidden="true" />
              자동 저장됨
            </p>
          </section>
        ))}
      </div>

      <RecipeFormModal
        open={store.formOpen}
        recipe={store.editingRecipe}
        onClose={() => store.setFormOpen(false)}
        onSave={store.saveRecipe}
      />
    </>
  );
}
