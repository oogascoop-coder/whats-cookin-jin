"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { RecipeFormModal } from "@/components/RecipeFormModal";
import { TopBar } from "@/components/TopBar";
import { useRecipeStore } from "@/components/useRecipeStore";
import { getGroceryItems, makeGroceryItem, saveGroceryItems } from "@/lib/storage";
import { GroceryItem } from "@/lib/types";
import { visibleRecipes } from "@/lib/recipe-utils";

export function GroceryListPage() {
  const store = useRecipeStore();
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    setItems(getGroceryItems());
  }, []);

  function persist(nextItems: GroceryItem[]) {
    setItems(nextItems);
    saveGroceryItems(nextItems);
  }

  function addItem(label: string) {
    if (!label.trim()) return;
    persist([makeGroceryItem(label.trim()), ...items]);
  }

  function addRecipeIngredients(recipeId: string) {
    const recipe = store.recipes.find((item) => item.id === recipeId);
    if (!recipe) return;

    const existing = new Set(items.map((item) => item.label));
    const newItems = recipe.ingredients
      .filter((ingredient) => !existing.has(ingredient))
      .map((ingredient) => makeGroceryItem(ingredient));
    persist([...newItems, ...items]);
  }

  const recipes = visibleRecipes(store.recipes);

  return (
    <>
      <TopBar onNewRecipe={store.startNewRecipe} />
      <header className="mb-6 rounded-none border border-[#eadfcd] bg-white p-6 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato-600">장보기 리스트</p>
        <h1 className="mt-2 font-serif text-5xl text-cocoa">레시피에서 장보기 준비하기</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#7b6a5f]">
          직접 항목을 추가하거나 저장한 레시피의 재료를 한 번에 담을 수 있어요.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="soft-card p-5">
          <form
            className="mb-4 flex flex-col gap-2 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault();
              addItem(newItem);
              setNewItem("");
            }}
          >
            <label className="sr-only" htmlFor="grocery-item">장보기 항목 추가</label>
            <input
              id="grocery-item"
              className="input-field"
              value={newItem}
              onChange={(event) => setNewItem(event.target.value)}
              placeholder="항목 추가, 예: 달걀"
            />
            <button className="primary-button shrink-0" type="submit" aria-label="장보기 항목 추가">
              <Plus size={18} aria-hidden="true" />
              추가
            </button>
          </form>

          <div className="space-y-2">
            {items.length === 0 ? (
              <p className="rounded-none border border-[#eadfcd] bg-white p-4 text-sm text-[#7b6a5f]">장보기 리스트가 비어 있어요.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-3 rounded-none border border-[#eadfcd] bg-white p-3">
                  <label className="flex min-w-0 flex-1 items-center gap-3">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() =>
                        persist(items.map((current) => current.id === item.id ? { ...current, checked: !current.checked } : current))
                      }
                    />
                    <span className={`truncate font-semibold ${item.checked ? "text-[#9a887b] line-through" : "text-cocoa"}`}>
                      {item.label}
                    </span>
                  </label>
                  <button
                    className="icon-button h-8 w-8"
                    type="button"
                    aria-label={`${item.label} 삭제`}
                    onClick={() => persist(items.filter((current) => current.id !== item.id))}
                  >
                    <Trash2 size={15} aria-hidden="true" />
                  </button>
                </div>
              ))
            )}
          </div>
        </section>

        <aside className="soft-card p-5">
          <h2 className="font-serif text-2xl text-cocoa">레시피에서 추가</h2>
          <p className="mt-1 text-sm text-[#7b6a5f]">레시피를 고르면 재료가 장보기 리스트에 들어가요.</p>
          <label className="mt-4 block">
            <span className="sr-only">레시피 선택</span>
            <select
              className="input-field"
              defaultValue=""
              onChange={(event) => {
                addRecipeIngredients(event.target.value);
                event.currentTarget.value = "";
              }}
            >
              <option value="">레시피 선택...</option>
              {recipes.map((recipe) => (
                <option key={recipe.id} value={recipe.id}>
                  {recipe.title}
                </option>
              ))}
            </select>
          </label>
        </aside>
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
