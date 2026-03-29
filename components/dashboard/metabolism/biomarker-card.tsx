import { ChevronRight } from "lucide-react";
import Link from "next/link";

type BiomarkerCardProps = {
  title: string;
  value: string;
  unit: string;
  /** 0–100: horizontal position of the marker on the green track. */
  markerPercent: number;
  href?: string;
};

export function BiomarkerCard({
  title,
  value,
  unit,
  markerPercent,
  href = "#",
}: BiomarkerCardProps) {
  const pct = Math.min(100, Math.max(0, markerPercent));

  const inner = (
    <>
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-0.5">
          <span className="truncate font-sans text-sm font-semibold text-[#200201]">
            {title}
          </span>
          <ChevronRight
            className="h-4 w-4 shrink-0 text-zinc-400"
            strokeWidth={2}
            aria-hidden
          />
        </div>
        <div className="shrink-0 text-right">
          <p className="font-sans text-2xl font-semibold tabular-nums leading-none tracking-tight text-[#4a5d23]">
            {value}
          </p>
          <p className="mt-1 font-sans text-[10px] font-medium uppercase tracking-wide text-zinc-400">
            {unit}
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="inline-flex rounded-full bg-sky-100 px-2 py-0.5 font-sans text-[11px] font-semibold text-sky-900">
          Insight
        </span>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 pl-2">
          <span
            className="h-2 w-2 shrink-0 rounded-sm bg-stone-200"
            aria-hidden
          />
          <div className="relative h-2 min-w-[4rem] max-w-[7rem] flex-1 rounded-full bg-emerald-100">
            <span
              className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-emerald-700 shadow-[0_1px_1px_rgba(0,0,0,0.15)]"
              style={{ left: `${pct}%` }}
              aria-hidden
            />
          </div>
          <span
            className="h-2 w-2 shrink-0 rounded-sm bg-stone-200"
            aria-hidden
          />
        </div>
      </div>
    </>
  );

  return (
    <Link
      href={href}
      className="block rounded-2xl border border-stone-200/90 bg-[#faf8f5] p-3 shadow-[0_1px_4px_rgba(0,0,0,0.022)] transition hover:border-stone-300/90 hover:bg-[#f7f4ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
    >
      {inner}
    </Link>
  );
}
