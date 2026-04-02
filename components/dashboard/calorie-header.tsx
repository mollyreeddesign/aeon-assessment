"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useHealthGoalsProgress } from "@/components/dashboard/health-goals-progress-context";
import { AnimatedHealthProgressRing } from "@/components/dashboard/health-progress-ring";
import { DashboardTopBar } from "@/components/dashboard/dashboard-top-bar";

type CalorieHeaderProps = {
  healthScore: number;
  /** Ring fill 0–100; defaults to `healthScore` */
  ringFillPercent?: number;
};

export function CalorieHeader({
  healthScore,
  ringFillPercent,
}: CalorieHeaderProps) {
  const { goalProgressPercent } = useHealthGoalsProgress();
  const [showCalculationModal, setShowCalculationModal] = useState(false);
  const [goalCelebration, setGoalCelebration] = useState(false);
  const sweepRef = useRef<HTMLSpanElement | null>(null);
  const wasAt100Ref = useRef(false);
  const celebrationTimeoutRef = useRef<number | null>(null);

  const ringPct = Math.min(
    100,
    Math.max(0, ringFillPercent ?? healthScore),
  );
  // Light feedback when the goal checklist is fully complete.
  useEffect(() => {
    const at100 = goalProgressPercent >= 100;
    if (at100 && !wasAt100Ref.current) {
      wasAt100Ref.current = true;
      setGoalCelebration(true);

      if (celebrationTimeoutRef.current) {
        window.clearTimeout(celebrationTimeoutRef.current);
      }
      celebrationTimeoutRef.current = window.setTimeout(() => {
        setGoalCelebration(false);
      }, 1100);
      return;
    }

    if (!at100) {
      wasAt100Ref.current = false;
      setGoalCelebration(false);
      if (celebrationTimeoutRef.current) {
        window.clearTimeout(celebrationTimeoutRef.current);
        celebrationTimeoutRef.current = null;
      }
    }
  }, [goalProgressPercent]);

  useEffect(() => {
    if (!goalCelebration) return;
    const el = sweepRef.current;
    if (!el) return;

    // Subtle sweeping highlight across the percentage.
    el.animate(
      [
        { transform: "translateX(-120%)", opacity: 0 },
        { transform: "translateX(-10%)", opacity: 0.95, offset: 0.45 },
        { transform: "translateX(120%)", opacity: 0 },
      ],
      { duration: 900, easing: "cubic-bezier(0.33,1,0.68,1)" },
    );
  }, [goalCelebration]);

  return (
    <>
      <header className="relative overflow-hidden text-white">
      <DashboardTopBar />
      <div
        className="relative flex min-h-[50dvh] flex-col overflow-hidden px-4 pb-24 pt-[calc(env(safe-area-inset-top,0px)+4rem)] text-white"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden={true}>
          <Image
            src="/images/BG.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover object-center"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-black/10"
          aria-hidden={true}
        />

        <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center">
          <div className="grid grid-cols-3 items-center gap-10 px-1 py-6">
            <div className="flex min-w-0 flex-col items-center justify-center text-center pt-10">
              <p className="flex items-baseline justify-center gap-0.5 font-sans text-2xl font-semibold tabular-nums leading-none">
                <span className="tabular-nums">80</span>
                <span className="text-xl font-semibold leading-none">%</span>
              </p>
              <p className="mt-1 max-w-[7rem] text-[12px] font-medium leading-tight text-white/85">
                <span className="min-[401px]:hidden">
                  Screening
                  <br />
                  Score
                </span>
                <span className="hidden min-[401px]:inline">Screening Score</span>
              </p>
            </div>

            <div className="flex min-w-0 flex-col items-center justify-center justify-self-center gap-4">
              <h2 className="text-center text-xl font-semibold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.45)]">
                Health Score
              </h2>
              <div className="relative mx-auto flex h-[10rem] w-[10rem] shrink-0 items-center justify-center">
                <svg
                  width={261}
                  height={261}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[10rem] w-[10rem] -translate-x-1/2 -translate-y-1/2"
                  viewBox="0 0 261 261"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden={true}
                >
                  <circle cx="130.5" cy="130.5" r="130.5" fill="white" />
                  <circle
                    cx="130.5"
                    cy="130.5"
                    r="130.5"
                    fill="url(#paint0_linear_3_25)"
                    fillOpacity={0.4}
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3_25"
                      x1="37"
                      y1="55.5"
                      x2="222"
                      y2="216.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E47F42" />
                      <stop offset="1" stopColor="#E6C5AE" />
                    </linearGradient>
                  </defs>
                </svg>
                <AnimatedHealthProgressRing
                  targetPercent={ringPct}
                  className="pointer-events-none absolute left-1/2 top-1/2 z-[5] h-[10rem] w-[10rem] -translate-x-1/2 -translate-y-1/2 -rotate-90"
                />
                <div className="relative z-10 text-center">
                  <p className="text-6xl font-bold leading-none tabular-nums text-[#200201]">
                    {healthScore}
                  </p>
                  <p className="text-base font-bold text-[#200201]">
                    Optimal
                  </p>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-col items-center justify-center text-center pt-10">
              <div className="relative">
              <p
                className={`flex items-baseline justify-center gap-0.5 font-sans text-2xl font-semibold tabular-nums leading-none ${
                  goalCelebration ? "text-emerald-200" : ""
                }`}
              >
                <span className="tabular-nums">{goalProgressPercent}</span>
                <span className="text-xl font-semibold leading-none">%</span>
              </p>
              {goalCelebration ? (
                <span
                  ref={sweepRef}
                  className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-emerald-200/35 to-transparent opacity-0"
                  aria-hidden
                />
              ) : null}
              </div>
              <p className="mt-1 max-w-[7rem] text-[12px] font-medium leading-tight text-white/85">
                <span className="min-[401px]:hidden">
                  Goal
                  <br />
                  Progress
                </span>
                <span className="hidden min-[401px]:inline">Goal Progress</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 -mt-3 mb-1 flex justify-center">
          <button
            type="button"
            onClick={() => setShowCalculationModal(true)}
            className="text-xs font-medium text-white/90 underline decoration-white/70 underline-offset-2 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            How are these calculated?
          </button>
        </div>
      </div>
      </header>

      {showCalculationModal ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="health-score-modal-title"
          onClick={() => setShowCalculationModal(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl border border-stone-200/80 bg-[#FDF9EB] p-5 text-[#200201] shadow-[0_12px_36px_rgba(0,0,0,0.22)]"
            onClick={(event) => event.stopPropagation()}
          >
            <h3
              id="health-score-modal-title"
              className="font-serif text-lg font-semibold"
            >
              How your scores are calculated
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              <span className="font-semibold text-zinc-800">Your Health Score</span> combines biomarker trends and MRI
              markers into one weighted result. Recent improvements carry more
              weight than older data, and consistent healthy biomarker trends help raise
              the score over time.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              <span className="font-semibold text-zinc-800">Goal Progress</span> is
              the percentage of daily goal checkboxes you have completed in Health
              Goals. When you pin Improve Metabolism, those tasks count toward the
              total as well.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              <span className="font-semibold text-zinc-800">Screening Score</span>{" "}
              Indicates how complete and up to date your health checks are. Lower scores may mean you’re due for additional screening.
            </p>
            <Link
              href="/book"
              className="mt-3 inline-flex w-fit items-center justify-center text-sm font-semibold text-[#200201] underline decoration-zinc-400 underline-offset-4 transition hover:bg-zinc-100 hover:decoration-zinc-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
            >
              Book a screening
            </Link>
            <button
              type="button"
              onClick={() => setShowCalculationModal(false)}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#514c2410] px-4 py-2.5 text-sm font-semibold text-[#200201] transition hover:bg-[#514c2420] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
