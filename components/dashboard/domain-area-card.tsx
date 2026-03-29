import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { ScreeningStatusLabel } from "@/components/dashboard/screening-status-label";

type FindingsStatus = "good" | "attention" | "attention-required";

type CheckupLine = "due" | "overdue";

type DomainAreaCardProps = {
  title: string;
  icon: ReactNode;
  screeningIntro: string;
  findingsBody: string;
  screeningPercent?: string;
  /** Shown after “Checkup Due: ” when `checkupLine` is `"due"`. */
  checkupDue?: string;
  /** Green “Good”, yellow “Attention Recommended”, or red “Attention Required”. */
  findingsStatus?: FindingsStatus;
  /** `"due"` → gray “Checkup Due: …”; `"overdue"` → red “Checkup: Overdue”. */
  checkupLine?: CheckupLine;
};

export function DomainAreaCard({
  title,
  icon,
  screeningIntro,
  findingsBody,
  screeningPercent = "98%",
  checkupDue = "6 months",
  findingsStatus = "good",
  checkupLine = "due",
}: DomainAreaCardProps) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 pt-3">
            {icon}
            <h2 className="font-serif text-lg font-semibold leading-none text-zinc-900">
              {title}
            </h2>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end self-stretch pt-0.5 text-right">
          <span className="font-sans text-2xl font-semibold tabular-nums tracking-tight text-zinc-900">
            {screeningPercent}
          </span>
          <ScreeningStatusLabel />
        </div>
      </div>
      <div className="mt-4 w-full border-t border-zinc-100 pt-4">
        <p className="text-sm leading-relaxed text-zinc-700">{screeningIntro}</p>
        <h3 className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 font-serif text-base font-semibold text-zinc-900">
          <span>Status:</span>
          {findingsStatus === "good" ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 font-sans text-sm font-semibold text-emerald-900">
              <span aria-hidden className="text-base leading-none">
                🟢
              </span>
              Good
            </span>
          ) : findingsStatus === "attention" ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 font-sans text-sm font-semibold text-amber-950">
              <span aria-hidden className="text-base leading-none">
                🟡
              </span>
              Attention Recommended
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-2.5 py-1 font-sans text-sm font-semibold text-red-900">
              <span aria-hidden className="text-base leading-none">
                🔴
              </span>
              Attention Required
            </span>
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-700">{findingsBody}</p>
      </div>
      <div className="mt-5 flex flex-row flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <button
          type="button"
          className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-zinc-200 px-[19px] py-[14px] font-medium text-md text-[#200201] transition hover:bg-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
        >
          Open
          <ChevronRight
            className="h-4 w-4 shrink-0 text-[#200201]"
            strokeWidth={2.5}
            aria-hidden
          />
        </button>
        <p
          className={`shrink-0 whitespace-nowrap text-sm font-semibold ${
            checkupLine === "overdue" ? "text-red-600" : "text-zinc-600"
          }`}
        >
          {checkupLine === "overdue"
            ? "Checkup: Overdue"
            : `Checkup Due: ${checkupDue}`}
        </p>
      </div>
    </div>
  );
}
