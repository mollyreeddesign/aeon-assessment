import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function EducationalLibrarySection() {
  return (
    <section className="mx-4 mt-5 rounded-3xl bg-[#F3EEFF]/60 px-5 py-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <h2 className="text-xl font-semibold text-zinc-950">
        Educational Library
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
        Medically-reviewed resources curated for your profile.
      </p>

      <div className="relative mt-5 aspect-[1200/944] w-full overflow-hidden rounded-2xl bg-zinc-900/5">
        <Image
          src="/images/doctor.png"
          alt="Physician presenting educational health content"
          fill
          sizes="(max-width: 448px) calc(100vw - 4.5rem), 400px"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-violet-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
            Video
          </span>
          <span className="rounded-full bg-violet-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
            8 min
          </span>
        </div>
      </div>

      <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-zinc-900">
        Understanding Your MRI: White Matter Health
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">
        A deep dive into how lifestyle changes can actively preserve the
        brain&apos;s structural integrity and support long-term cognitive
        wellness.
      </p>
      <Link
        href="/report"
        className="mt-5 inline-flex w-fit max-w-full items-center justify-center gap-1.5 rounded-full bg-[#514c2410] px-[19px] py-[14px] font-medium text-md text-[#200201] transition hover:bg-[#514c2420] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
      >
        Read More
        <ChevronRight
          className="h-4 w-4 shrink-0 text-[#200201]"
          strokeWidth={2.5}
          aria-hidden
        />
      </Link>
    </section>
  );
}
