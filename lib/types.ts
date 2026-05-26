export type SourceType = "Instagram" | "YouTube" | "Blog" | "직접 입력";
export type Difficulty = "Easy" | "Medium" | "Hard";

export type Recipe = {
  id: string;
  title: string;
  sourceUrl: string;
  sourceType: SourceType;
  category: string;
  mealType: string;
  dietGoal: string;
  time: string;
  difficulty: Difficulty;
  servings: number;
  ingredients: string[];
  steps: string[];
  tags: string[];
  notes: string;
  imageUrl?: string;
  galleryImages?: string[];
  favorite: boolean;
  bookmarked: boolean;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  viewedAt?: string;
};

export type RecipeInput = Omit<
  Recipe,
  "id" | "favorite" | "bookmarked" | "deleted" | "createdAt" | "updatedAt" | "viewedAt"
>;

export type GroceryItem = {
  id: string;
  label: string;
  checked: boolean;
  createdAt: string;
};

export type Note = {
  id: string;
  title: string;
  body: string;
  updatedAt: string;
};

export type MealPlan = Record<string, string[]>;
