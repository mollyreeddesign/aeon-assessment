import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

function SealCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      aria-hidden
      data-testid="icon-sealCheck"
      className={className}
      fill="currentColor"
    >
      <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  );
}

export function MriStatusCard() {
  return (
    <article className="mx-4 mt-5 overflow-hidden rounded-3xl bg-[#FDF9EB] shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
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
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-200 px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
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

      <div className="bg-[#FDF9EB] px-5 pb-5 pt-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-zinc-950">
            MRI Results: Plus
          </h2>
          <p className="text-base font-medium text-zinc-950">12/11/2025</p>
        </div>

        <div className="mt-3" role="status">
          <span className="inline-flex w-fit max-w-full items-center gap-1.5 rounded-full bg-[#cfe8f6] px-2.5 py-1 font-sans text-sm font-semibold text-[#200201] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <SealCheckIcon className="h-4 w-4 shrink-0" />
            Verified by Swiss doctors
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          <div className="flex min-h-0 min-w-0 flex-col rounded-2xl bg-[#f4c3c6] px-3 py-3 sm:px-4 sm:py-4">
            <p className="text-3xl font-bold tabular-nums leading-none text-[#200201] sm:text-4xl">
              1
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

        <Link
          href="/report"
          className="mt-5 inline-flex w-fit max-w-full items-center justify-center gap-1.5 rounded-full bg-[#514c2410] px-[19px] py-[14px] font-medium text-md text-[#200201] transition hover:bg-[#514c2420] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
        >
          Open Report
          <ChevronRight
            className="h-4 w-4 shrink-0 text-[#200201]"
            strokeWidth={2.5}
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
