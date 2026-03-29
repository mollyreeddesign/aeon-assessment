import Image from "next/image";
import { AnimatedHealthProgressRing } from "@/components/dashboard/health-progress-ring";
import { DashboardTopBar } from "@/components/dashboard/dashboard-top-bar";

type CalorieHeaderProps = {
  eaten: number;
  burned: number;
  healthScore: number;
  /** Ring fill 0–100; defaults to `healthScore` */
  ringFillPercent?: number;
};

export function CalorieHeader({
  eaten,
  burned,
  healthScore,
  ringFillPercent,
}: CalorieHeaderProps) {
  const ringPct = Math.min(
    100,
    Math.max(0, ringFillPercent ?? healthScore),
  );
  return (
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
              <p className="font-sans text-2xl font-semibold tabular-nums leading-none">
                {eaten.toLocaleString()}
              </p>
              <p className="mt-1 max-w-[5.5rem] text-[10px] font-medium uppercase tracking-wider text-white/85">
                Health Age
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
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#200201]">
                    Optimal
                  </p>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-col items-center justify-center text-center pt-10">
              <p className="font-sans text-2xl font-semibold tabular-nums leading-none">
                {burned}
              </p>
              <p className="mt-1 max-w-[5.5rem] text-[10px] font-medium uppercase tracking-wider text-white/85">
                Burned
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
