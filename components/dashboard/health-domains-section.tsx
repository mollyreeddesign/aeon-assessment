import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function HealthDomainsSection() {
  return (
    <section className="mx-4 mt-5 rounded-3xl bg-white px-5 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      <h2 className="text-xl font-semibold text-zinc-950">
        Health Domains
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
        Understand your health across key areas like Heart, Metabolism, and more.
      </p>
      <Link
        href="/domains"
        className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#200201] px-[19px] py-[14px] font-medium text-md text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
      >
        View Domains
        <ChevronRight
          className="h-4 w-4 shrink-0 text-white"
          strokeWidth={2.5}
          aria-hidden
        />
      </Link>
    </section>
  );
}
