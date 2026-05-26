import { ChefHat } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="soft-card flex flex-col items-center justify-center px-6 py-12 text-center">
      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#fff1e9] text-tomato-500">
        <ChefHat aria-hidden="true" />
      </span>
      <h3 className="font-serif text-2xl text-cocoa">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-[#7b6a5f]">{description}</p>
    </div>
  );
}
