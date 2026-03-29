import type { Metadata } from "next";
import { CalendarPlus } from "lucide-react";

import { DashboardTopBar } from "@/components/dashboard/dashboard-top-bar";
import { SubpageHeader } from "@/components/dashboard/subpage-header";

export const metadata: Metadata = {
  title: "Book — Daily",
};

const headerSurfaceClass = "bg-[#e8eef5]";

const cardClass =
  "rounded-2xl border border-stone-200/80 bg-[#FDF9EB] px-4 py-5 shadow-[0_1px_4px_rgba(0,0,0,0.022)]";

export default function BookPage() {
  return (
    <div className="pb-28">
      <DashboardTopBar tone="light" />
      <SubpageHeader
        className="!pt-[calc(env(safe-area-inset-top,0px)+7rem)] !pb-[30px]"
        solidSurfaceClassName={headerSurfaceClass}
        title="Book"
        subtitle="Schedule follow-up imaging and assessments with Aeon."
      />
      <div className="px-4 pt-5">
        <section className={cardClass}>
          <div className="flex gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100/90 text-[#200201]">
              <CalendarPlus
                className="h-5 w-5"
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
            <div className="min-w-0">
              <h2 className="font-serif text-lg font-semibold leading-snug text-zinc-900">
                Book another MRI with Aeon
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Online booking is not available in this preview. When it
                launches, you will be able to pick a location, time, and scan
                type in a few taps.
              </p>
              <p className="mt-3 text-xs font-medium text-zinc-500">
                Placeholder — no data is sent from this screen.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
