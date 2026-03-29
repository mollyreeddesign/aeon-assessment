import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function MriStatusCard() {
  return (
    <article className="mx-4 mt-5 overflow-hidden rounded-3xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
      <div className="relative rounded-t-3xl bg-black px-4 pb-6 pt-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-zinc-200 px-3 py-1.5">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"
            aria-hidden
          />
          <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-700">
            New result
          </span>
        </div>

        <div className="relative mx-auto mt-4 flex justify-center pb-2">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-xl"
            aria-hidden
          />
          <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-white/15">
            <Image
              src="/images/mri-card-visual.png"
              alt="Sagittal MRI brain scan"
              fill
              sizes="96px"
              className="object-cover object-center"
            />
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
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Open Report
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
        </button>
      </div>
    </article>
  );
}
