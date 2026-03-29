import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function MriStatusCard() {
  return (
    <article className="mx-4 mt-3 overflow-hidden rounded-3xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
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

      <div className="bg-zinc-100 px-5 pb-5 pt-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
          Latest MRI status
        </p>
        <h3 className="mt-1.5 text-xl font-bold tracking-tight text-zinc-950">
          Nov 12th Scan
        </h3>
        <p className="mt-2 text-base font-semibold text-blue-600">
          Ready to review.
        </p>
        <button
          type="button"
          className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-[#FBA87F] px-[19px] py-[14px] font-medium text-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
        >
          Open Report
          <ChevronRight
            className="h-4 w-4 shrink-0 text-black"
            strokeWidth={2.5}
            aria-hidden
          />
        </button>
      </div>
    </article>
  );
}
