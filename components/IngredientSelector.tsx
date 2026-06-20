"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type IngredientSelectorProps = {
  ingredients: string[];
  selected: string[];
  onToggle: (ingredient: string) => void;
  onAdd: (ingredient: string) => void;
};

export function IngredientSelector({ ingredients, selected, onToggle, onAdd }: IngredientSelectorProps) {
  const [value, setValue] = useState("");

  return (
    <div className="soft-card p-5">
      <div className="mb-4">
        <p className="recipe-display text-2xl text-cocoa">남은 재료 활용하기</p>
        <p className="mt-1 text-sm text-[#7b6a5f]">냉장고에 있는 재료를 골라보세요.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient) => (
          <button
            key={ingredient}
            className={`chip ${selected.includes(ingredient) ? "chip-active" : ""}`}
            type="button"
            aria-label={`${ingredient} 재료 선택 전환`}
            onClick={() => onToggle(ingredient)}
          >
            {ingredient}
          </button>
        ))}
      </div>

      <form
        className="mt-4 flex flex-col gap-2 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          if (!value.trim()) return;
          onAdd(value.trim());
          setValue("");
        }}
      >
        <label className="sr-only" htmlFor="new-ingredient">
          재료 추가
        </label>
        <input
          id="new-ingredient"
          className="input-field"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="재료 추가, 예: 토마토"
        />
        <button className="secondary-button shrink-0" type="submit" aria-label="재료 추가">
          <Plus size={17} aria-hidden="true" />
          추가
        </button>
      </form>
    </div>
  );
}
