"use client";

import { Recipe } from "@/lib/types";
import { EmptyState } from "@/components/EmptyState";
import { RecipeCard } from "@/components/RecipeCard";

type RecipeGridProps = {
  recipes: Recipe[];
  emptyTitle?: string;
  emptyDescription?: string;
  onOpen: (recipe: Recipe) => void;
  onToggleFavorite: (recipe: Recipe) => void;
};

export function RecipeGrid({
  recipes,
  emptyTitle = "아직 레시피가 없어요",
  emptyDescription = "새 레시피를 추가하거나 필터를 바꿔보세요.",
  onOpen,
  onToggleFavorite
}: RecipeGridProps) {
  if (recipes.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className="grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onOpen={onOpen}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
