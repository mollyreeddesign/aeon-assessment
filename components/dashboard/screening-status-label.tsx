"use client";

import { useEffect, useId, useRef, useState } from "react";

const TOOLTIP_TEXT =
  "Screening Score indicates how complete and up to date your health checks are. Lower scores may mean you’re due for additional screening.";

export function ScreeningStatusLabel() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const tipId = useId();

  useEffect(() => {
    if (!open) return;

    function onDocPointerDown(e: PointerEvent) {
      if (
        wrapRef.current &&
        !wrapRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onDocPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDocPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative mt-0.5 inline-flex flex-col items-end">
      <button
        type="button"
        className="max-w-[9rem] text-right text-sm font-medium leading-snug text-zinc-600 underline decoration-zinc-400/80 decoration-dotted underline-offset-[3px] transition hover:text-zinc-900 hover:decoration-zinc-600 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
        aria-expanded={open}
        aria-controls={tipId}
        onClick={() => setOpen((v) => !v)}
      >
        Screening Score
      </button>
      {open ? (
        <div
          id={tipId}
          role="tooltip"
          className="absolute right-0 top-full z-20 mt-1.5 w-[min(16.5rem,calc(100vw-2rem))] rounded-lg bg-zinc-200 px-3 py-2.5 text-left text-base text-[#200201] shadow-[0_2px_6px_rgba(0,0,0,0.05)] ring-1 ring-zinc-300/70"
        >
          {TOOLTIP_TEXT}
        </div>
      ) : null}
    </div>
  );
}
