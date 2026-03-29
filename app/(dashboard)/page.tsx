import { CalorieHeader } from "@/components/dashboard/calorie-header";
import { DayRatingCard } from "@/components/dashboard/day-rating-card";
import { MacroCard } from "@/components/dashboard/macro-card";
import { MriResultsAlert } from "@/components/dashboard/mri-results-alert";
import { HealthDomainsSection } from "@/components/dashboard/health-domains-section";
import { MriStatusCard } from "@/components/dashboard/mri-status-card";
import { QuickActions } from "@/components/dashboard/quick-actions";

export default function DiaryPage() {
  return (
    <div className="pb-28">
      <CalorieHeader
        eaten={45}
        burned={651}
        healthScore={83}
        ringFillPercent={84}
      />
      <MacroCard />
      <MriResultsAlert />
      <MriStatusCard />
      <HealthDomainsSection />
      <QuickActions />
      <DayRatingCard message="Eat more healthy carbs to boost your day rating!" />

      <section className="mx-4 mt-6 rounded-2xl border border-dashed border-zinc-200/80 bg-white/50 px-4 py-6 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
          Meals
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          Logged meals and snacks will appear here.
        </p>
      </section>
    </div>
  );
}
