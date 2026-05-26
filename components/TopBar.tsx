"use client";

import { useState } from "react";
import { Bell, Plus, UserRound } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";

type TopBarProps = {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onNewRecipe: () => void;
};

export function TopBar({ searchValue, onSearchChange, onNewRecipe }: TopBarProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="relative mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      {onSearchChange ? (
        <div className="w-full md:max-w-xl">
          <SearchBar value={searchValue || ""} onChange={onSearchChange} />
        </div>
      ) : (
        <div>
          <p className="text-sm font-semibold text-tomato-600">What&apos;s Cookin&apos;, Jin</p>
          <p className="text-sm text-[#7b6a5f]">좋아하는 레시피를 저장하고 쉽게 찾아요.</p>
        </div>
      )}

      <div className="flex items-center gap-2 self-end md:self-auto">
        <div className="relative">
          <button
            className="icon-button"
            type="button"
            aria-label="알림 열기"
            onClick={() => setNotificationsOpen((open) => !open)}
          >
            <Bell size={18} aria-hidden="true" />
          </button>
          {notificationsOpen ? (
            <div className="absolute right-0 top-12 z-20 w-64 rounded-2xl border border-[#eadfcd] bg-white p-4 text-sm shadow-soft">
              <p className="font-semibold text-cocoa">오늘의 알림</p>
              <p className="mt-2 leading-6 text-[#7b6a5f]">
                오이로 만들 수 있는 레시피가 준비되어 있어요.
              </p>
            </div>
          ) : null}
        </div>

        <div className="relative">
          <button
            className="icon-button"
            type="button"
            aria-label="프로필 메뉴 열기"
            onClick={() => setProfileOpen((open) => !open)}
          >
            <UserRound size={18} aria-hidden="true" />
          </button>
          {profileOpen ? (
            <div className="absolute right-0 top-12 z-20 w-56 rounded-2xl border border-[#eadfcd] bg-white p-4 text-sm shadow-soft">
              <p className="font-semibold text-cocoa">Hajin&apos;s kitchen</p>
              <p className="mt-1 text-[#7b6a5f]">브라우저에 저장되는 개인 레시피 박스</p>
            </div>
          ) : null}
        </div>

        <button className="primary-button" type="button" aria-label="새 레시피 만들기" onClick={onNewRecipe}>
          <Plus size={18} aria-hidden="true" />
          <span>새 레시피</span>
        </button>
      </div>
    </div>
  );
}
