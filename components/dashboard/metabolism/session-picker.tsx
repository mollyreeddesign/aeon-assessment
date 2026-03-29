"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const SESSIONS = [
  "MRI Results: Plus 12/11/2025",
  "MRI Results: Starter 05/11/2025",
  "Advanced Blood Test 10/10/2024",
] as const;

type SessionPickerProps = {
  /** `id` of the visible "Session:" label element (for screen readers). */
  labelId: string;
};

export function SessionPicker({ labelId }: SessionPickerProps) {
  const listId = useId();
  const valueId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>(SESSIONS[0]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: PointerEvent) {
      if (wrapRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative min-w-0 flex-1">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={open ? listId : undefined}
        aria-labelledby={`${labelId} ${valueId}`}
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-[44px] w-full items-center justify-between gap-2 rounded-xl border border-zinc-300 bg-white py-2.5 pl-3.5 pr-3 text-left text-sm font-medium leading-snug text-zinc-900 shadow-sm outline-none transition hover:border-zinc-400 focus-visible:border-zinc-500 focus-visible:ring-2 focus-visible:ring-zinc-200 sm:text-[15px]"
      >
        <span id={valueId} className="min-w-0 flex-1 truncate">
          {value}
        </span>
        <ChevronDown
          className={`h-[18px] w-[18px] shrink-0 text-zinc-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
          aria-hidden
        />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={labelId}
          className="absolute left-0 right-0 top-[calc(100%+4px)] z-[100] max-h-[min(16rem,50vh)] overflow-auto rounded-xl border border-zinc-200 bg-white py-1 shadow-[0_10px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
        >
          {SESSIONS.map((option) => (
            <li key={option} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={value === option}
                className={`flex w-full px-3.5 py-3 text-left text-sm font-medium leading-snug text-zinc-900 transition hover:bg-zinc-100 focus-visible:bg-zinc-100 focus-visible:outline-none sm:text-[15px] ${
                  value === option ? "bg-zinc-50" : ""
                }`}
                onClick={() => {
                  setValue(option);
                  setOpen(false);
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
