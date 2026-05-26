"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { categories, dietGoals, mealTypes } from "@/data/recipes";
import { dietGoalLabel, mealTypeLabel } from "@/lib/labels";
import { Recipe, RecipeInput, SourceType } from "@/lib/types";
import { createRecipeFromInput } from "@/lib/storage";
import { splitByComma } from "@/lib/recipe-utils";

type RecipeFormModalProps = {
  open: boolean;
  recipe?: Recipe | null;
  onClose: () => void;
  onSave: (recipe: Recipe) => void;
};

const sourceTypes: SourceType[] = ["Instagram", "YouTube", "Blog", "직접 입력"];

const emptyInput: RecipeInput = {
  title: "",
  sourceUrl: "",
  sourceType: "직접 입력",
  category: "한식 / 밥",
  mealType: "Lunch",
  dietGoal: "None",
  time: "10 min",
  difficulty: "Easy",
  servings: 1,
  ingredients: [],
  steps: [],
  tags: [],
  notes: "",
  imageUrl: ""
};

export function RecipeFormModal({ open, recipe, onClose, onSave }: RecipeFormModalProps) {
  const initialInput = useMemo<RecipeInput>(() => {
    if (!recipe) return emptyInput;

    return {
      title: recipe.title,
      sourceUrl: recipe.sourceUrl,
      sourceType: recipe.sourceType,
      category: recipe.category,
      mealType: recipe.mealType,
      dietGoal: recipe.dietGoal,
      time: recipe.time,
      difficulty: recipe.difficulty,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
      steps: recipe.steps,
      tags: recipe.tags,
      notes: recipe.notes,
      imageUrl: recipe.imageUrl || ""
    };
  }, [recipe]);

  const [input, setInput] = useState<RecipeInput>(initialInput);
  const [ingredientsText, setIngredientsText] = useState(initialInput.ingredients.join(", "));
  const [stepsText, setStepsText] = useState(initialInput.steps.join("\n"));
  const [tagsText, setTagsText] = useState(initialInput.tags.join(", "));

  useEffect(() => {
    if (!open) return;
    setInput(initialInput);
    setIngredientsText(initialInput.ingredients.join(", "));
    setStepsText(initialInput.steps.join("\n"));
    setTagsText(initialInput.tags.join(", "));
  }, [initialInput, open]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    if (open) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  function updateField<Key extends keyof RecipeInput>(key: Key, value: RecipeInput[Key]) {
    setInput((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanInput: RecipeInput = {
      ...input,
      title: input.title.trim() || "Untitled Recipe",
      sourceUrl: input.sourceUrl.trim(),
      ingredients: splitByComma(ingredientsText),
      steps: stepsText
        .split("\n")
        .map((step) => step.trim())
        .filter(Boolean),
      tags: splitByComma(tagsText),
      imageUrl: input.imageUrl?.trim()
    };

    if (recipe) {
      onSave({
        ...recipe,
        ...cleanInput,
        updatedAt: new Date().toISOString()
      });
      return;
    }

    onSave(createRecipeFromInput(cleanInput));
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-cocoa/40 p-3 backdrop-blur-sm sm:items-center">
      <form
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#eadfcd] bg-[#fffdf8] shadow-soft"
        onSubmit={handleSubmit}
        role="dialog"
        aria-modal="true"
        aria-labelledby="recipe-form-title"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-[#eadfcd] bg-[#fffdf8]/95 p-4 backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato-600">
              {recipe ? "레시피 수정" : "새 레시피"}
            </p>
            <h2 id="recipe-form-title" className="font-serif text-3xl text-cocoa">
              {recipe ? "저장한 레시피를 수정해요" : "맛있는 아이디어를 저장해요"}
            </h2>
          </div>
          <button className="icon-button" type="button" aria-label="레시피 입력창 닫기" onClick={onClose}>
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold">레시피 제목</span>
            <input
              className="input-field"
              value={input.title}
              onChange={(event) => updateField("title", event.target.value)}
              placeholder="오이무침"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">출처 URL</span>
            <input
              className="input-field"
              value={input.sourceUrl}
              onChange={(event) => updateField("sourceUrl", event.target.value)}
              placeholder="https://..."
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">출처 타입</span>
            <select
              className="input-field"
              value={input.sourceType}
              onChange={(event) => updateField("sourceType", event.target.value as SourceType)}
            >
              {sourceTypes.map((source) => (
                <option key={source}>{source}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">카테고리</span>
            <select
              className="input-field"
              value={input.category}
              onChange={(event) => updateField("category", event.target.value)}
            >
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">식사 타입</span>
            <select
              className="input-field"
              value={input.mealType}
              onChange={(event) => updateField("mealType", event.target.value)}
            >
              {mealTypes.map((mealType) => (
                <option key={mealType} value={mealType}>{mealTypeLabel(mealType)}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">식단 목표</span>
            <select
              className="input-field"
              value={input.dietGoal}
              onChange={(event) => updateField("dietGoal", event.target.value)}
            >
              {dietGoals.map((goal) => (
                <option key={goal} value={goal}>{dietGoalLabel(goal)}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">조리 시간</span>
            <input
              className="input-field"
              value={input.time}
              onChange={(event) => updateField("time", event.target.value)}
              placeholder="15 min"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">난이도</span>
            <select
              className="input-field"
              value={input.difficulty}
              onChange={(event) => updateField("difficulty", event.target.value as RecipeInput["difficulty"])}
            >
              <option value="Easy">쉬움</option>
              <option value="Medium">보통</option>
              <option value="Hard">어려움</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">인분</span>
            <input
              className="input-field"
              type="number"
              min={1}
              value={input.servings}
              onChange={(event) => updateField("servings", Number(event.target.value))}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">이미지 또는 동영상 URL</span>
            <input
              className="input-field"
              value={input.imageUrl}
              onChange={(event) => updateField("imageUrl", event.target.value)}
              placeholder="/recipe-media/cucumber.jpg or /recipe-media/noodles.mp4"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-semibold">재료 목록</span>
            <textarea
              className="input-field min-h-24"
              value={ingredientsText}
              onChange={(event) => setIngredientsText(event.target.value)}
              placeholder="오이, 고춧가루, 식초"
            />
            <span className="mt-1 block text-xs text-[#7b6a5f]">쉼표로 나눠서 입력해요.</span>
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-semibold">조리 순서</span>
            <textarea
              className="input-field min-h-32"
              value={stepsText}
              onChange={(event) => setStepsText(event.target.value)}
              placeholder={"오이를 썰어요.\n양념을 섞어요.\n버무려요."}
            />
            <span className="mt-1 block text-xs text-[#7b6a5f]">한 줄에 한 단계씩 입력해요.</span>
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-semibold">태그</span>
            <input
              className="input-field"
              value={tagsText}
              onChange={(event) => setTagsText(event.target.value)}
              placeholder="간단 요리, 오이, 반찬"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-semibold">메모</span>
            <textarea
              className="input-field min-h-24"
              value={input.notes}
              onChange={(event) => updateField("notes", event.target.value)}
              placeholder="다음에 바꾸고 싶은 점, 맛있었던 팁..."
            />
          </label>
        </div>

        <div className="sticky bottom-0 flex justify-end gap-2 border-t border-[#eadfcd] bg-[#fffdf8]/95 p-4 backdrop-blur">
          <button className="secondary-button" type="button" aria-label="레시피 입력 취소" onClick={onClose}>
            취소
          </button>
          <button className="primary-button" type="submit" aria-label="레시피 저장">
            레시피 저장
          </button>
        </div>
      </form>
    </div>
  );
}
