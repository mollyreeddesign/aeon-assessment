import { CalorieHeader } from "@/components/dashboard/calorie-header";
import { HealthGoalCard } from "@/components/dashboard/health-goal-card";
import { HealthDomainsSection } from "@/components/dashboard/health-domains-section";
import { MriStatusCard } from "@/components/dashboard/mri-status-card";
import { QuickActions } from "@/components/dashboard/quick-actions";

export default function DiaryPage() {
  return (
    <div className="pb-28">
      <CalorieHeader
        healthScore={83}
        ringFillPercent={84}
      />
      <HealthGoalCard />
      <MriStatusCard />
      <HealthDomainsSection />
      <QuickActions />
    </div>
  );
}
