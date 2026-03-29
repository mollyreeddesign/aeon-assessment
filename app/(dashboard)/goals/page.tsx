import type { Metadata } from "next";

import { HealthGoalsPageView } from "@/components/dashboard/health-goals-page-view";

export const metadata: Metadata = {
  title: "Health Goals — Daily",
};

export default function GoalsPage() {
  return <HealthGoalsPageView />;
}
