import type { Metadata } from "next";
import { Brain, Dumbbell, Flame, Heart } from "lucide-react";

import { CancerDomainIcon } from "@/components/dashboard/cancer-domain-icon";
import { DashboardTopBar } from "@/components/dashboard/dashboard-top-bar";
import { DomainAreaCard } from "@/components/dashboard/domain-area-card";
import { SubpageHeader } from "@/components/dashboard/subpage-header";

export const metadata: Metadata = {
  title: "Domains — Daily",
};

const iconClass = "h-8 w-8 shrink-0 text-[#200201]";

export default function DomainsPage() {
  return (
    <div className="pb-28">
      <DashboardTopBar tone="light" />
      <SubpageHeader
        className="!pt-[calc(env(safe-area-inset-top,0px)+7rem)] !pb-[30px]"
        solidSurfaceClassName="bg-[#e2f6c8]"
        title="Domains"
        subtitle="Explore your health areas that matter to you."
      />
      <div className="flex flex-col gap-4 px-4 pt-5">
        <DomainAreaCard
          title="Metabolism"
          icon={
            <Flame className={iconClass} strokeWidth={1.75} aria-hidden />
          }
          screeningPercent="50%"
          screeningIntro="Assessment of metabolic markers tied to energy use, blood sugar balance, and how your body processes nutrients."
          findingsStatus="attention-required"
          findingsBody="Some findings require further review. We recommend following up with a specialist for a more detailed assessment."
          checkupDue="2 months"
          openHref="/metabolism"
        />
        <DomainAreaCard
          title="Cancer"
          icon={<CancerDomainIcon />}
          screeningIntro="Screening across key organs, including the pancreas, liver, and kidneys, to help detect potential issues early."
          findingsBody="No concerning findings were identified in your most recent MRI. Your results are within the expected range."
        />
        <DomainAreaCard
          title="Heart & Vessels"
          icon={
            <Heart className={iconClass} strokeWidth={1.75} aria-hidden />
          }
          screeningPercent="40%"
          screeningIntro="Screening of the heart and major vessels, including coronary and aortic health, to help detect potential issues early."
          findingsStatus="attention"
          findingsBody="One or more areas may benefit from follow-up. These findings are not urgent but should be monitored."
          checkupLine="overdue"
        />
        <DomainAreaCard
          title="Brain"
          icon={<Brain className={iconClass} strokeWidth={1.75} aria-hidden />}
          screeningPercent="91%"
          screeningIntro="Evaluation of brain structure and vascular health, with attention to areas linked to cognition, mood, and long-term neurological wellness."
          findingsBody="Your recent neuroimaging did not show findings that need immediate action. Results are consistent with routine screening expectations."
          checkupDue="12 months"
        />
        <DomainAreaCard
          title="Physical Strength"
          icon={
            <Dumbbell className={iconClass} strokeWidth={1.75} aria-hidden />
          }
          screeningPercent="68%"
          screeningIntro="Tracking muscle function, recovery capacity, and load tolerance to understand how your body responds to activity and training stress."
          findingsStatus="attention"
          findingsBody="A few markers suggest room to optimize strength and recovery. Consider a structured plan and recheck in the medium term."
          checkupDue="5 months"
        />
      </div>
    </div>
  );
}
