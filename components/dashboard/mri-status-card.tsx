import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function MriStatusCard() {
  return (
    <article className="mx-4 mt-5 overflow-hidden rounded-3xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
      <div className="relative overflow-hidden rounded-t-3xl bg-black">
        <div className="relative aspect-video w-full">
          <Image
            src="/images/mri-card-visual.png"
            alt="Sagittal MRI brain scan"
            fill
            sizes="(max-width: 448px) calc(100vw - 2rem), 400px"
            className="z-0 object-cover object-[center_35%]"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 z-10 p-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-200 px-3 py-1.5 shadow-sm">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                aria-hidden
              />
              <span className="text-[13px] font-base tracking-wide text-zinc-700">
                New Results
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-100 px-5 pb-5 pt-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-zinc-950">
            Plus MRI Results
          </h2>
          <p className="text-base font-medium text-zinc-950">12/11/2025</p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          <div className="flex min-h-0 min-w-0 flex-col rounded-2xl bg-[#f4c3c6] px-3 py-3 sm:px-4 sm:py-4">
            <p className="text-3xl font-bold tabular-nums leading-none text-[#200201] sm:text-4xl">
              0
            </p>
            <p className="mt-2 text-left text-[11px] font-medium leading-snug text-[#200201] sm:text-xs">
              Attention required
            </p>
          </div>
          <div className="flex min-h-0 min-w-0 flex-col rounded-2xl bg-[#E8E0D4] px-3 py-3 sm:px-4 sm:py-4">
            <p className="text-3xl font-bold tabular-nums leading-none text-[#200201] sm:text-4xl">
              6
            </p>
            <p className="mt-2 text-left text-[11px] font-medium leading-snug text-[#200201] sm:text-xs">
              Attention recommended
            </p>
          </div>
          <div className="flex min-h-0 min-w-0 flex-col rounded-2xl bg-[rgb(233,246,208)] px-3 py-3 sm:px-4 sm:py-4">
            <p className="text-3xl font-bold tabular-nums leading-none text-emerald-900 sm:text-4xl">
              1
            </p>
            <p className="mt-2 text-left text-[11px] font-medium leading-snug text-[#200201] sm:text-xs">
              Not concerning
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-[#200201] text-white px-[19px] py-[14px] font-medium text-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
        >
          Open Report
          <ChevronRight
            className="h-4 w-4 shrink-0 text-white"
            strokeWidth={2.5}
            aria-hidden
          />
        </button>
      </div>
    </article>
  );
}
