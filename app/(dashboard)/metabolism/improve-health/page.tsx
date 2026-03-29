import type { Metadata } from "next";

import { DashboardTopBar } from "@/components/dashboard/dashboard-top-bar";
import { ImproveMetabolismSection } from "@/components/dashboard/metabolism/improve-metabolism-section";
import { SubpageHeader } from "@/components/dashboard/subpage-header";

export const metadata: Metadata = {
  title: "Improving metabolic health — Daily",
};

const headerSurfaceClass = "bg-[#fde8d4]";

const cardClass =
  "rounded-2xl border border-stone-200/80 bg-[#FDF9EB] px-4 py-5 shadow-[0_1px_4px_rgba(0,0,0,0.022)]";

export default function ImproveMetabolicHealthPage() {
  return (
    <div className="pb-28">
      <DashboardTopBar tone="light" />
      <SubpageHeader
        backHref="/metabolism"
        backLabel="Metabolism"
        className="!pt-[calc(env(safe-area-inset-top,0px)+7rem)] !pb-[30px]"
        solidSurfaceClassName={headerSurfaceClass}
        title="Improving metabolic health"
        subtitle="A short guide to how energy, glucose, and daily habits fit together."
      />
      <div className="space-y-5 px-4 pt-5">
        <ImproveMetabolismSection />

        <section className={cardClass}>
          <h2 className="font-serif text-lg font-semibold text-zinc-900">
            What &ldquo;metabolic health&rdquo; refers to
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-700">
            <p>
              Metabolic health is about how well your body turns food into
              energy, keeps blood sugar in a steady range, and stores or uses
              fat—especially in the liver and around the organs. It is not one
              number on a lab report; it is the pattern of how insulin, lipids,
              liver enzymes, and body composition work together over time.
            </p>
            <p>
              When these systems are strained—often from long periods of high
              blood sugar swings, low activity, or poor sleep—your body has to
              work harder to stay in balance. The good news is that small,
              repeatable changes to meals, movement, and rest usually show up in
              how you feel before they show up on every marker.
            </p>
          </div>
        </section>

        <section className={cardClass}>
          <h2 className="font-serif text-lg font-semibold text-zinc-900">
            Practical priorities
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-700">
            <p>
              <span className="font-semibold text-zinc-800">
                Glucose stability.
              </span>{" "}
              Spreading carbohydrates through the day, choosing fiber-rich foods,
              and avoiding very large refined-carb meals—especially late at
              night—reduces the spikes that stress insulin over years.
            </p>
            <p>
              <span className="font-semibold text-zinc-800">
                Movement as medicine.
              </span>{" "}
              You do not need intense training to benefit. A brisk walk after
              eating, standing breaks during long sitting, and regular
              strength work a few times a week all improve how muscles take up
              glucose without needing as much insulin.
            </p>
            <p>
              <span className="font-semibold text-zinc-800">
                Sleep and stress.
              </span>{" "}
              Short sleep and chronic stress both nudge appetite hormones and
              can make steady glucose harder. A consistent bedtime and a simple
              wind-down routine support the same goals as diet and exercise.
            </p>
          </div>
        </section>

        <section className={cardClass}>
          <h2 className="font-serif text-lg font-semibold text-zinc-900">
            How to use this with your results
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700">
            Use your biomarkers and doctor notes as context, not a scorecard.
            Pick one or two habits from the summary at the top that feel
            realistic for the next few weeks. When you are ready to make daily
            reminders visible on your home dashboard, use{" "}
            <span className="font-semibold text-zinc-800">Pin to Dashboard</span>{" "}
            in that first section. The sections above this one expand on what
            metabolic health means and where to focus day to day.
          </p>
        </section>
      </div>
    </div>
  );
}
