"use client";

import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

type DateNavProps = {
  label: string;
};

export function DateNav({ label }: DateNavProps) {
  return (
    <div className="mx-4 mt-5 flex items-center justify-between rounded-2xl bg-zinc-100/90 px-3 py-2.5">
      <button
        type="button"
        className="rounded-full p-1.5 text-zinc-500 transition hover:bg-[#514c2420] hover:text-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
        aria-label="Previous day"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2} />
      </button>
      <div className="flex items-center gap-2 text-sm font-semibold text-zinc-700">
        <CalendarDays className="h-4 w-4 text-zinc-500" strokeWidth={2} />
        <span className="tracking-wide">{label}</span>
      </div>
      <button
        type="button"
        className="rounded-full p-1.5 text-zinc-500 transition hover:bg-[#514c2420] hover:text-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
        aria-label="Next day"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2} />
      </button>
    </div>
  );
}
