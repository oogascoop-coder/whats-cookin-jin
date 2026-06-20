"use client";

import { Lightbulb, Snowflake, Timer, Utensils } from "lucide-react";
import { RecipeFormModal } from "@/components/RecipeFormModal";
import { TopBar } from "@/components/TopBar";
import { useRecipeStore } from "@/components/useRecipeStore";

const tips = [
  { title: "오이는 키친타월로 감싸 보관하기", body: "물기를 줄이면 더 오래 아삭하게 보관할 수 있어요.", icon: Lightbulb },
  { title: "대파는 썰어서 냉동하기", body: "국, 볶음밥, 라면에 바로 넣기 좋아요.", icon: Snowflake },
  { title: "두부는 유통기한 확인하기", body: "개봉 후에는 물을 갈아주고 빨리 먹는 편이 좋아요.", icon: Timer },
  { title: "밥은 소분 냉동하기", body: "1인분씩 얼려두면 평일 식사가 훨씬 쉬워져요.", icon: Utensils }
];

export function TipsPage() {
  const store = useRecipeStore();

  return (
    <>
      <TopBar onNewRecipe={store.startNewRecipe} />
      <header className="mb-6 rounded-none border border-[#eadfcd] bg-white p-6 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato-600">요리 팁</p>
        <h1 className="recipe-display mt-2 text-5xl text-cocoa">작은 습관으로 요리를 쉽게</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#7b6a5f]">
          초보 1인 가구를 위한 간단한 주방 팁이에요.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {tips.map((tip) => {
          const Icon = tip.icon;

          return (
            <article key={tip.title} className="soft-card p-5">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1e9] text-tomato-600">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h2 className="recipe-display text-2xl leading-tight text-cocoa">{tip.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#7b6a5f]">{tip.body}</p>
            </article>
          );
        })}
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
