import { Difficulty } from "@/lib/types";

export function difficultyLabel(difficulty: Difficulty) {
  const labels: Record<Difficulty, string> = {
    Easy: "쉬움",
    Medium: "보통",
    Hard: "어려움"
  };

  return labels[difficulty];
}

export function mealTypeLabel(mealType: string) {
  const labels: Record<string, string> = {
    Breakfast: "아침",
    Lunch: "점심",
    Dinner: "저녁",
    Snack: "간식",
    "Late Night": "야식"
  };

  return labels[mealType] || mealType;
}

export function dietGoalLabel(goal: string) {
  const labels: Record<string, string> = {
    None: "해당 없음",
    "High Protein": "고단백",
    Light: "가벼운 식사",
    "Low Carb": "저탄수",
    Vegetarian: "채식"
  };

  return labels[goal] || goal;
}
