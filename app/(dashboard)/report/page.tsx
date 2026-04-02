import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUp, Calendar, Minus } from "lucide-react";

import { DashboardTopBar } from "@/components/dashboard/dashboard-top-bar";
import { SubpageHeader } from "@/components/dashboard/subpage-header";

export const metadata: Metadata = {
  title: "MRI Results: Plus",
};

/** Report header surface (light blue) + subtle bottom border. */
const headerSurfaceClass = "border-b border-black/10 bg-[#b2d0f7]";

const cardClass =
  "rounded-2xl border border-stone-200/80 bg-[#FDF9EB] px-4 py-5 shadow-[0_1px_4px_rgba(0,0,0,0.022)]";

/** Matches `DomainAreaCard` findings status pills on `/domains`. */
function DomainStatusGood({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 font-sans text-sm font-semibold text-emerald-900">
      <span aria-hidden className="text-base leading-none">
        🟢
      </span>
      {children}
    </span>
  );
}

function DomainStatusAttention({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 font-sans text-sm font-semibold text-amber-950">
      <span aria-hidden className="text-base leading-none">
        🟡
      </span>
      {children}
    </span>
  );
}

function FindingIllustration({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl bg-[#ece8e2]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full object-contain"
        sizes="(max-width: 448px) calc(100vw - 2rem), 400px"
      />
    </div>
  );
}

export default function OpenReportPage() {
  return (
    <div className="pb-28">
      <DashboardTopBar tone="light" />
      <SubpageHeader
        backHref="/"
        backLabel="Home"
        className="!pt-[calc(env(safe-area-inset-top,0px)+7rem)] !pb-[30px]"
        solidSurfaceClassName={headerSurfaceClass}
        title="MRI Results: Plus"
        subtitle={
          <>
            <span className="block text-[18px] font-medium text-zinc-800">
              Check-Up Date: 12/11/2025
            </span>
            <span className="mt-1 block text-sm font-medium text-zinc-500">
              Dr. Maya Chen · Zentrum für Bilddiagnostik, 4310 Rheinfelden
            </span>
          </>
        }
        subtitleClassName="leading-relaxed"
      />

      <div className="space-y-5 px-4 pt-5">
        <section className={cardClass}>
          <h2 className="font-serif text-lg font-semibold text-zinc-900">
            Scan Focus Areas
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600">
            Regions highlighted during your whole-body screening MRI.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl bg-[#ece8e2]">
            <Image
              src="/images/Imaging.png"
              alt="Whole-body scan reference with focus regions indicated"
              width={970}
              height={968}
              className="h-auto w-full rounded-xl object-contain"
              sizes="(max-width: 448px) calc(100vw - 2rem), 400px"
              priority
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-stone-200/80 bg-white/80 px-3 py-3 text-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <p className="text-sm font-medium text-zinc-500">
                Duration
              </p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-[#200201]">
                45 min
              </p>
            </div>
            <div className="rounded-xl border border-stone-200/80 bg-white/80 px-3 py-3 text-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <p className="text-sm font-medium text-zinc-500">
                Result Score
              </p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-[#200201]">
                62%
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200/80 bg-[#F3EEFF]/55 px-4 py-5 shadow-[0_1px_4px_rgba(0,0,0,0.022)]">
          <h3 className="font-serif text-lg font-semibold text-zinc-900">
            View Full Report
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">
            Explore the complete report with all measured values, reference
            ranges, and expanded notes for each body system.
          </p>
          <button
            type="button"
            className="mt-4 inline-flex w-fit max-w-full items-center justify-center gap-1.5 rounded-full bg-[#514c2410] px-[19px] py-[14px] text-md font-medium text-[#200201] transition hover:bg-[#514c2420] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
          >
            View Full Report
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
          </button>
        </section>

        <div className="pt-1">
          <h2 className="font-serif text-xl font-semibold tracking-tight text-zinc-950">
            Results Overview Summary
          </h2>
        </div>

        <section className={cardClass} aria-labelledby="blood-heading">
          <h3
            id="blood-heading"
            className="font-serif text-lg font-semibold text-zinc-900"
          >
            Blood biomarkers
          </h3>
          <div className="mt-2">
            <DomainStatusAttention>Review recommended</DomainStatusAttention>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-stone-200/80 bg-white/80 px-3 py-2.5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                ALT
              </p>
              <div className="mt-1 flex items-center justify-center gap-1.5">
                <p className="text-sm font-semibold tabular-nums text-zinc-900">
                  44 U/L
                </p>
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#514c2410]"
                  aria-label="Trending up"
                  title="Trending up"
                >
                  <ArrowUp
                    className="h-3.5 w-3.5 text-red-600"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-stone-200/80 bg-white/80 px-3 py-2.5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                HOMA-IR
              </p>
              <div className="mt-1 flex items-center justify-center gap-1.5">
                <p className="text-sm font-semibold tabular-nums text-zinc-900">
                  2.7
                </p>
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#514c2410]"
                  aria-label="Trending down"
                  title="Trending down"
                >
                  <ArrowDown
                    className="h-3.5 w-3.5 text-emerald-600"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-stone-200/80 bg-white/80 px-3 py-2.5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                Triglycerides
              </p>
              <div className="mt-1 flex items-center justify-center gap-1.5">
                <p className="text-sm font-semibold tabular-nums text-zinc-900">
                  179 mg/dL
                </p>
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#514c2410]"
                  aria-label="Stable trend"
                  title="Stable trend"
                >
                  <Minus
                    className="h-3.5 w-3.5 text-zinc-600"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700">
            This panel summarizes recent blood biomarker values captured with
            your report. Values are shown as measured so you and your clinician
            can compare trends across future check-ins.
          </p>
          <div
            className="mt-4 h-2 overflow-hidden rounded-full bg-stone-200/90"
            role="presentation"
            aria-hidden
          >
            <div className="h-full w-[64%] rounded-full bg-amber-600/85" />
          </div>
        </section>

        <section className={cardClass} aria-labelledby="cardio-heading">
          <h3
            id="cardio-heading"
            className="font-serif text-lg font-semibold text-zinc-900"
          >
            Cardiovascular Health
          </h3>
          <div className="mt-2">
            <DomainStatusGood>Good</DomainStatusGood>
          </div>
          <FindingIllustration
            src="/images/Lung.png"
            width={1110}
            height={606}
            alt="Illustration of the lungs and thorax for cardiovascular context"
          />
          <p className="mt-4 text-sm leading-relaxed text-zinc-700">
            Your heart chambers show normal dimensions and the aortic arch is
            clear. No significant plaque buildup was detected in the visualized
            portions of the major arteries.
          </p>
          <div
            className="mt-4 h-2 overflow-hidden rounded-full bg-stone-200/90"
            role="presentation"
            aria-hidden
          >
            <div className="h-full w-[92%] rounded-full bg-emerald-600/90" />
          </div>
        </section>

        <section className={cardClass} aria-labelledby="neuro-heading">
          <h3
            id="neuro-heading"
            className="font-serif text-lg font-semibold text-zinc-900"
          >
            Neurological Structure
          </h3>
          <div className="mt-2">
            <DomainStatusGood>Optimal</DomainStatusGood>
          </div>
          <FindingIllustration
            src="/images/Brain.png"
            width={1526}
            height={792}
            alt="Illustration of the brain for neurological context"
          />
          <p className="mt-4 text-sm leading-relaxed text-zinc-700">
            Brain volume is consistent with your age group. Grey and white
            matter differentiation is excellent, with no evidence of vascular
            micro-lesions or structural anomalies.
          </p>
          <div
            className="mt-4 h-2 overflow-hidden rounded-full bg-stone-200/90"
            role="presentation"
            aria-hidden
          >
            <div className="h-full w-[96%] rounded-full bg-emerald-600/90" />
          </div>
        </section>

        <section className={cardClass} aria-labelledby="msk-heading">
          <h3
            id="msk-heading"
            className="font-serif text-lg font-semibold text-zinc-900"
          >
            Musculoskeletal System
          </h3>
          <div className="mt-2">
            <DomainStatusAttention>Minor observation</DomainStatusAttention>
          </div>
          <FindingIllustration
            src="/images/report-open-hero-1.png"
            width={1300}
            height={949}
            alt="Whole-body reference illustration for musculoskeletal context"
          />
          <p className="mt-4 text-sm leading-relaxed text-zinc-700">
            Mild disc protrusion noted at L4-L5 level. This is a common finding
            and typically asymptomatic.
          </p>
          <div
            className="mt-4 h-2 overflow-hidden rounded-full bg-stone-200/90"
            role="presentation"
            aria-hidden
          >
            <div className="h-full w-[58%] rounded-full bg-amber-600/85" />
          </div>
        </section>

        <div className="space-y-2">
          <Link
            href="/add"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#514c2410] px-5 py-3.5 text-sm font-semibold text-[#200201] transition hover:bg-[#514c2420] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
          >
            <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
            Book Another MRI
          </Link>
          <p className="text-center text-xs leading-relaxed text-zinc-500">
            Next available consultation tomorrow at 10:00 AM
          </p>
        </div>

        <section className="rounded-2xl border border-stone-200/80 bg-[#F3EEFF]/60 px-4 py-5 shadow-[0_1px_4px_rgba(0,0,0,0.022)]">
          <h2 className="text-xl font-semibold text-zinc-950">
            Educational Library
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Educational explainers to help you better understand your results.
          </p>

          <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-900/5">
            <Image
              src="/images/mri-card-visual.png"
              alt="MRI-based educational visual for understanding your vitals"
              fill
              className="object-cover object-center"
              sizes="(max-width: 448px) calc(100vw - 2rem), 400px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-violet-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                Video
              </span>
              <span className="rounded-full bg-violet-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                6 min
              </span>
            </div>
          </div>

          <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-zinc-900">
            Understanding your vitals
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">
            Learn how MRI observations and blood biomarkers are interpreted
            together, what each metric represents, and how to track meaningful
            changes between follow-up reports.
          </p>
          <Link
            href="/domains"
            className="mt-5 inline-flex w-fit max-w-full items-center justify-center gap-1.5 rounded-full bg-[#514c2410] px-[19px] py-[14px] text-md font-medium text-[#200201] transition hover:bg-[#514c2420] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
          >
            Read More
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
          </Link>
        </section>
      </div>
    </div>
  );
}
