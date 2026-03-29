import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Flame, ShieldCheck, Stethoscope } from "lucide-react";

import { DashboardTopBar } from "@/components/dashboard/dashboard-top-bar";
import { ScreeningStatusLabel } from "@/components/dashboard/screening-status-label";
import { BiomarkerSections } from "@/components/dashboard/metabolism/biomarker-sections";
import { MetabolismImproveSectionGate } from "@/components/dashboard/metabolism/metabolism-improve-section-gate";
import { ResultsTimeline } from "@/components/dashboard/metabolism/results-timeline";
import { SubpageHeader } from "@/components/dashboard/subpage-header";

export const metadata: Metadata = {
  title: "Metabolism — Daily",
};

/** Warm peach—distinct from Domains mint (`#e2f6c8`). */
const headerSurfaceClass = "bg-[#fde8d4]";

const domainIconClass = "h-8 w-8 shrink-0 text-[#200201]";

export default function MetabolismPage() {
  return (
    <div className="pb-28">
      <DashboardTopBar tone="light" />
      <SubpageHeader
        backHref="/domains"
        className="!pt-[calc(env(safe-area-inset-top,0px)+7rem)] !pb-[30px]"
        solidSurfaceClassName={headerSurfaceClass}
        title="Metabolism"
        subtitle="Review energy use, blood sugar balance, and how your body processes nutrients."
      />
      <div className="space-y-5 px-4 pt-5">
        <section className="rounded-2xl border border-stone-200/80 bg-[#FDF9EB] px-4 py-4 shadow-[0_1px_4px_rgba(0,0,0,0.022)]">
          <div className="flex items-center gap-2">
            <Stethoscope
              className="h-4 w-4 shrink-0 text-zinc-700"
              strokeWidth={2}
              aria-hidden
            />
            <h3 className="font-serif text-lg font-semibold text-zinc-900">
              Note from your Doctor
            </h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">
            Focus on liver fat/enzymes, insulin markers, and visceral fat as
            your key metabolism signals. Recommendation: aim for a 20-30 minute
            walk after your largest meal, limit refined carbs at dinner, and
            recheck these labs in 8-12 weeks.
          </p>
          <div className="mt-3 flex items-center justify-between gap-2">
            <p className="min-w-0 text-xs font-medium text-zinc-500">
              Dr. Maya Chen · Mar 29, 2026
            </p>
            <div
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg border border-sky-200/90 bg-sky-100/90 px-2 py-1.5 text-[12px] font-semibold leading-none text-sky-950 shadow-sm sm:px-2.5 sm:py-2 sm:text-[11px] sm:leading-snug"
              role="status"
            >
              <ShieldCheck
                className="h-3.5 w-3.5 shrink-0 text-sky-600 sm:h-4 sm:w-4"
                strokeWidth={2}
                aria-hidden
              />
              <span>Secure &amp; Private</span>
            </div>
          </div>
        </section>
        <section className="rounded-2xl border border-stone-200/80 bg-[#FDF9EB] px-4 py-4 shadow-[0_1px_4px_rgba(0,0,0,0.022)]">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2 pt-2">
              <Flame
                className={domainIconClass}
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="font-serif text-lg font-semibold leading-none text-zinc-900">
                Metabolism
              </h3>
            </div>
            <div className="flex shrink-0 flex-col items-end text-right">
              <span className="font-sans text-2xl font-semibold tabular-nums tracking-tight text-zinc-900">
                50%
              </span>
              <ScreeningStatusLabel />
            </div>
          </div>
          <div className="mt-4 border-t border-zinc-100 pt-4">
            <h4 className="flex items-center gap-2 font-serif text-base font-semibold text-zinc-900">
              <span>Status:</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-2.5 py-1 font-sans text-sm font-semibold text-red-900">
                <span aria-hidden className="text-base leading-none">
                  🔴
                </span>
                Attention Required
              </span>
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700">
              Some findings require further review. We recommend following up
              with a specialist for a more detailed assessment.
            </p>
          </div>
          <p className="mt-4 text-sm font-semibold text-zinc-600">
            Checkup Due: 2 months
          </p>
        </section>
        <section aria-label="Open the metabolic health guide">
          <Link
            href="/metabolism/improve-health"
            className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-stone-400/35 bg-[rgb(253,168,123)] px-4 py-4 text-left shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition hover:brightness-[0.98] active:brightness-[0.94] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800"
          >
            <span className="font-serif text-base font-semibold leading-snug text-zinc-900">
              Read the metabolic health guide
            </span>
            <ChevronRight
              className="h-6 w-6 shrink-0 text-zinc-900 transition group-hover:translate-x-0.5"
              strokeWidth={2.25}
              aria-hidden
            />
          </Link>
        </section>
        <ResultsTimeline />
        <BiomarkerSections />
        <MetabolismImproveSectionGate />
      </div>
    </div>
  );
}
