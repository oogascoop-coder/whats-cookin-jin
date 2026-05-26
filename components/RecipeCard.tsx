"use client";

import { Bookmark, Clock3, Heart, Play, UsersRound } from "lucide-react";
import { Recipe } from "@/lib/types";
import { difficultyLabel } from "@/lib/labels";
import { isVideoUrl, shortIngredientLine } from "@/lib/recipe-utils";

type RecipeCardProps = {
  recipe: Recipe;
  onOpen: (recipe: Recipe) => void;
  onToggleFavorite: (recipe: Recipe) => void;
  onToggleBookmark: (recipe: Recipe) => void;
};

const swatches = ["#f6d4b8", "#f3e3c9", "#dce8ea", "#f5c9bc", "#dfe8d4"];

export function RecipeCard({ recipe, onOpen, onToggleFavorite, onToggleBookmark }: RecipeCardProps) {
  const color = swatches[Math.abs(recipe.id.length) % swatches.length];

  return (
    <article
      className="group cursor-pointer overflow-hidden rounded-[1.35rem] border border-[#eadfcd] bg-white transition hover:-translate-y-0.5 hover:border-[#dfcdb4]"
      onClick={() => onOpen(recipe)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") onOpen(recipe);
      }}
      aria-label={`${recipe.title} 열기`}
    >
      <div className="relative aspect-[1.08/1] overflow-hidden bg-[#f3eee7]">
        {recipe.imageUrl && isVideoUrl(recipe.imageUrl) ? (
          <>
            <video
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              src={recipe.imageUrl}
              muted
              loop
              autoPlay
              playsInline
              aria-label={`${recipe.title} video preview`}
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cocoa/45 backdrop-blur-sm">
                <Play size={24} fill="currentColor" aria-hidden="true" />
              </span>
            </span>
          </>
        ) : recipe.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={recipe.imageUrl} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        ) : (
          <div
            className="flex h-full items-center justify-center"
            style={{
              background: `radial-gradient(circle at 30% 35%, #fffdf8 0 12%, transparent 13%), linear-gradient(135deg, ${color}, #fff7eb)`
            }}
          >
            <div className="rounded-full bg-white/70 px-5 py-3 font-serif text-xl text-cocoa shadow-card">
              {recipe.title.slice(0, 4)}
            </div>
          </div>
        )}

        <div className="absolute right-3 top-3 flex gap-2 opacity-95">
          <button
            className={`icon-button h-10 w-10 bg-white/92 shadow-sm ${recipe.bookmarked ? "border-tomato-500 text-tomato-500" : ""}`}
            type="button"
            aria-label={recipe.bookmarked ? "북마크 해제" : "북마크 추가"}
            onClick={(event) => {
              event.stopPropagation();
              onToggleBookmark(recipe);
            }}
          >
            <Bookmark size={17} fill={recipe.bookmarked ? "currentColor" : "none"} aria-hidden="true" />
          </button>
          <button
            className={`icon-button h-10 w-10 bg-white/92 shadow-sm ${recipe.favorite ? "border-tomato-500 text-tomato-500" : ""}`}
            type="button"
            aria-label={recipe.favorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}
            onClick={(event) => {
              event.stopPropagation();
              onToggleFavorite(recipe);
            }}
          >
            <Heart size={17} fill={recipe.favorite ? "currentColor" : "none"} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="px-5 pb-6 pt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#f0d7ca] bg-[#fff8f4] px-3 py-1 text-xs font-semibold text-tomato-600">
            {recipe.category}
          </span>
          <span className="text-xs font-semibold text-herb">{difficultyLabel(recipe.difficulty)}</span>
        </div>

        <h3 className="font-serif text-3xl leading-tight text-cocoa">{recipe.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#7b6a5f]">{shortIngredientLine(recipe)}</p>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-[#6f6259]">
          <span className="inline-flex items-center gap-1">
            <Clock3 size={16} aria-hidden="true" />
            {recipe.time}
          </span>
          <span className="inline-flex items-center gap-1">
            <UsersRound size={16} aria-hidden="true" />
            {recipe.servings}인분
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {recipe.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-[#eee2d2] bg-[#fffdf8] px-3 py-1 text-xs text-[#7b6a5f]">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
