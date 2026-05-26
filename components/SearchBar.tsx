"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">레시피 검색</span>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8d7b6e]"
        size={18}
        aria-hidden="true"
      />
      <input
        className="input-field pl-11"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="레시피, 재료, 요리 종류 검색..."
        type="search"
      />
    </label>
  );
}
