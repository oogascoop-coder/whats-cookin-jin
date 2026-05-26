"use client";

import { useEffect, useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { RecipeFormModal } from "@/components/RecipeFormModal";
import { TopBar } from "@/components/TopBar";
import { useRecipeStore } from "@/components/useRecipeStore";
import { getNotes, saveNotes } from "@/lib/storage";
import { Note } from "@/lib/types";
import { makeId } from "@/lib/recipe-utils";

export function NotesPage() {
  const store = useRecipeStore();
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  function persist(nextNotes: Note[]) {
    setNotes(nextNotes);
    saveNotes(nextNotes);
  }

  function resetForm() {
    setTitle("");
    setBody("");
    setEditingId(null);
  }

  function saveNote() {
    if (!title.trim() && !body.trim()) return;
    const now = new Date().toISOString();

    if (editingId) {
      persist(notes.map((note) => note.id === editingId ? { ...note, title, body, updatedAt: now } : note));
    } else {
      persist([{ id: makeId("note"), title: title || "Untitled note", body, updatedAt: now }, ...notes]);
    }

    resetForm();
  }

  return (
    <>
      <TopBar onNewRecipe={store.startNewRecipe} />
      <header className="mb-6 rounded-3xl border border-[#eadfcd] bg-[#fbf8f1] p-6 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tomato-600">주방 메모</p>
        <h1 className="mt-2 font-serif text-5xl text-cocoa">요리 생각을 적어두는 곳</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#7b6a5f]">
          소스 비율, 다음에 바꿔보고 싶은 점, 장보기 아이디어를 적어두세요.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
        <section className="soft-card p-5">
          <h2 className="font-serif text-2xl text-cocoa">{editingId ? "메모 수정" : "새 메모"}</h2>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-semibold">제목</span>
            <input className="input-field" value={title} onChange={(event) => setTitle(event.target.value)} />
          </label>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-semibold">메모</span>
            <textarea className="input-field min-h-40" value={body} onChange={(event) => setBody(event.target.value)} />
          </label>
          <div className="mt-4 flex gap-2">
            <button className="primary-button" type="button" aria-label="주방 메모 저장" onClick={saveNote}>
              <Plus size={18} aria-hidden="true" />
              메모 저장
            </button>
            {editingId ? (
              <button className="secondary-button" type="button" aria-label="메모 수정 취소" onClick={resetForm}>
                취소
              </button>
            ) : null}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {notes.length === 0 ? (
            <div className="soft-card p-5 text-sm text-[#7b6a5f]">아직 메모가 없어요. 첫 주방 메모를 남겨보세요.</div>
          ) : (
            notes.map((note) => (
              <article key={note.id} className="soft-card p-5">
                <h3 className="font-serif text-2xl text-cocoa">{note.title}</h3>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-[#6f6259]">{note.body}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    className="secondary-button"
                    type="button"
                    aria-label={`${note.title} 수정`}
                    onClick={() => {
                      setEditingId(note.id);
                      setTitle(note.title);
                      setBody(note.body);
                    }}
                  >
                    <Pencil size={17} aria-hidden="true" />
                    수정
                  </button>
                  <button
                    className="secondary-button text-tomato-600"
                    type="button"
                    aria-label={`${note.title} 삭제`}
                    onClick={() => persist(notes.filter((current) => current.id !== note.id))}
                  >
                    <Trash2 size={17} aria-hidden="true" />
                    삭제
                  </button>
                </div>
              </article>
            ))
          )}
        </section>
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
