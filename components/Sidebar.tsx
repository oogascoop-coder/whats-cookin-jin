"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  ChefHat,
  ClipboardList,
  Heart,
  Home,
  Lightbulb,
  NotebookPen,
  Refrigerator,
  Tags,
  Trash2,
  Utensils
} from "lucide-react";

const menuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/my-recipes", label: "내 레시피", icon: BookOpen },
  { href: "/ingredients", label: "재료로 찾기", icon: Refrigerator },
  { href: "/categories", label: "카테고리", icon: Tags },
  { href: "/meal-types", label: "식사 타입", icon: Utensils },
  { href: "/favorites", label: "즐겨찾기", icon: Heart },
  { href: "/trash", label: "휴지통", icon: Trash2 },
  { href: "/grocery-list", label: "장보기 리스트", icon: ClipboardList },
  { href: "/tips", label: "요리 팁", icon: Lightbulb },
  { href: "/notes", label: "주방 메모", icon: NotebookPen }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-72 border-r border-[#eadfcd] bg-[#fbf8f1]/95 px-5 py-6 shadow-soft backdrop-blur lg:block">
        <Link href="/" className="mb-8 block rounded-2xl p-2">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-tomato-500 text-white">
              <ChefHat size={24} aria-hidden="true" />
            </span>
            <div>
              <p className="font-serif text-2xl leading-tight text-cocoa">What&apos;s Cookin&apos;, Jin</p>
              <p className="mt-1 text-xs leading-5 text-[#7b6a5f]">
                Easy recipes by Hajin for whatever you&apos;re craving today.
              </p>
            </div>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-white text-tomato-600 shadow-card"
                    : "text-[#5c4f46] hover:bg-white hover:text-tomato-600"
                }`}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 border-t border-[#eadfcd] bg-[#fffdf8]/95 px-2 py-2 shadow-soft backdrop-blur lg:hidden"
      >
        {menuItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-2xl px-1 py-2 text-[10px] font-semibold ${
                active ? "bg-[#fff1e9] text-tomato-600" : "text-[#6f6259]"
              }`}
            >
              <Icon size={18} aria-hidden="true" />
              <span className="max-w-full truncate">{item.label.split(" ")[0]}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
