"use client";

import { categories } from "@/data/recipes";

type CategoryChipsProps = {
  selected: string | null;
  onSelect: (category: string | null) => void;
};

export function CategoryChips({ selected, onSelect }: CategoryChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        className={`chip ${selected === null ? "chip-active" : ""}`}
        type="button"
        aria-label="전체 카테고리 보기"
        onClick={() => onSelect(null)}
      >
        전체
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`chip ${selected === category ? "chip-active" : ""}`}
          type="button"
          aria-label={`${category} 카테고리로 필터링`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
