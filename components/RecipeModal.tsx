"use client";

import { useEffect } from "react";
import { ExternalLink, Pencil, ShoppingBasket, Trash2, X } from "lucide-react";
import { difficultyLabel } from "@/lib/labels";
import { Recipe } from "@/lib/types";

type RecipeModalProps = {
  recipe: Recipe | null;
  onClose: () => void;
  onEdit: (recipe: Recipe) => void;
  onDelete: (recipe: Recipe) => void;
  onToggleFavorite: (recipe: Recipe) => void;
  onAddIngredientsToGrocery: (recipe: Recipe) => void;
};

export function RecipeModal({
  recipe,
  onClose,
  onEdit,
  onDelete,
  onToggleFavorite,
  onAddIngredientsToGrocery
}: RecipeModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    if (recipe) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [recipe, onClose]);

  if (!recipe) return null;

  const galleryImages = recipe.galleryImages?.length
    ? recipe.galleryImages
    : recipe.imageUrl
      ? [recipe.imageUrl]
      : [];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-cocoa/40 p-3 backdrop-blur-sm sm:items-center">
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-none border border-[#eadfcd] bg-white shadow-soft"
        role="dialog"
        aria-modal="true"
        aria-labelledby="recipe-modal-title"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-[#eadfcd] bg-white/95 p-4 backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato-600">{recipe.category}</p>
            <h2 id="recipe-modal-title" className="font-serif text-3xl text-cocoa">
              {recipe.title}
            </h2>
          </div>
          <button className="icon-button" type="button" aria-label="레시피 상세 닫기" onClick={onClose}>
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="grid gap-6 p-5 md:grid-cols-[1fr_1.2fr]">
          <div>
            {galleryImages.length > 0 ? (
              <section className="mb-4">
                <h3 className="mb-2 font-serif text-2xl text-cocoa">참고 이미지</h3>
                <div className="grid gap-3">
                  {galleryImages.map((image, index) => (
                    <div key={`${image}-${index}`} className="overflow-hidden rounded-none border border-[#eadfcd] bg-white shadow-card">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={image} alt={`${recipe.title} 참고 이미지 ${index + 1}`} className="h-auto w-full object-cover" />
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="rounded-none border border-[#eadfcd] bg-white p-6 shadow-card">
              <p className="font-serif text-5xl leading-tight text-cocoa">{recipe.title}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <span className="rounded-none border border-[#eadfcd] bg-white p-3">시간<br /><strong>{recipe.time}</strong></span>
                <span className="rounded-none border border-[#eadfcd] bg-white p-3">난이도<br /><strong>{difficultyLabel(recipe.difficulty)}</strong></span>
                <span className="rounded-none border border-[#eadfcd] bg-white p-3">인분<br /><strong>{recipe.servings}인분</strong></span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                className="secondary-button"
                type="button"
                aria-label={recipe.favorite ? "만들어본 레시피 체크 해제" : "만들어본 레시피로 체크"}
                onClick={() => onToggleFavorite(recipe)}
              >
                <span className="text-base font-bold leading-none" aria-hidden="true">✔</span>
                만들어봄
              </button>
              <button
                className="secondary-button"
                type="button"
                aria-label="재료를 장보기 리스트에 추가"
                onClick={() => onAddIngredientsToGrocery(recipe)}
              >
                <ShoppingBasket size={17} aria-hidden="true" />
                장보기
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <section>
              <h3 className="mb-2 font-serif text-2xl text-cocoa">재료</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.ingredients.map((ingredient) => (
                  <span key={ingredient} className="chip">
                    {ingredient}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="mb-2 font-serif text-2xl text-cocoa">조리 순서</h3>
              <ol className="space-y-2">
                {recipe.steps.map((step, index) => (
                  <li key={`${step}-${index}`} className="rounded-none border border-[#eadfcd] bg-white p-3 text-sm leading-6 text-[#5c4f46]">
                    <span className="mr-2 font-semibold text-tomato-600">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            {recipe.notes ? (
              <section className="rounded-none border border-[#eadfcd] bg-white p-4">
                <h3 className="font-serif text-xl text-cocoa">메모</h3>
                <p className="mt-1 text-sm leading-6 text-[#6f6259]">{recipe.notes}</p>
              </section>
            ) : null}

            <div className="flex flex-wrap justify-between gap-3 border-t border-[#eadfcd] pt-4">
              <div className="flex flex-wrap gap-2">
                {recipe.sourceUrl ? (
                  <a className="secondary-button" href={recipe.sourceUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={17} aria-hidden="true" />
                    출처
                  </a>
                ) : null}
                <button className="secondary-button" type="button" aria-label="레시피 수정" onClick={() => onEdit(recipe)}>
                  <Pencil size={17} aria-hidden="true" />
                  수정
                </button>
              </div>
              <button className="secondary-button text-tomato-600" type="button" aria-label="레시피를 휴지통으로 이동" onClick={() => onDelete(recipe)}>
                <Trash2 size={17} aria-hidden="true" />
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
