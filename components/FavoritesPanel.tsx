"use client";

import Link from "next/link";
import { Recipe } from "@/lib/types";

type FavoritesPanelProps = {
  recipes: Recipe[];
  onOpen: (recipe: Recipe) => void;
  onToggleFavorite: (recipe: Recipe) => void;
};

export function FavoritesPanel({ recipes, onOpen, onToggleFavorite }: FavoritesPanelProps) {
  return (
    <section className="soft-card p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl text-cocoa">만들어본 레시피</h2>
          <p className="mt-1 text-sm text-[#7b6a5f]">직접 만들어본 레시피를 체크해두는 곳이에요.</p>
        </div>
        <Link href="/favorites" className="text-sm font-semibold text-tomato-600 hover:text-tomato-500">
          전체 보기
        </Link>
      </div>

      <div className="space-y-3">
        {recipes.length === 0 ? (
          <p className="text-sm text-[#7b6a5f]">레시피의 체크를 누르면 여기에 모여요.</p>
        ) : (
          recipes.slice(0, 4).map((recipe) => (
            <div key={recipe.id} className="flex items-center justify-between gap-3 rounded-none border border-[#eadfcd] bg-white p-3">
              <button
                type="button"
                className="min-w-0 text-left"
                aria-label={`${recipe.title} 열기`}
                onClick={() => onOpen(recipe)}
              >
                <p className="truncate font-semibold text-cocoa">{recipe.title}</p>
                <p className="text-xs text-[#7b6a5f]">{recipe.time} · {recipe.category}</p>
              </button>
              <button
                type="button"
                className="icon-button h-9 w-9 text-tomato-500"
                aria-label="만들어본 레시피 체크 해제"
                onClick={() => onToggleFavorite(recipe)}
              >
                <span className="text-base font-bold leading-none" aria-hidden="true">✔</span>
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
