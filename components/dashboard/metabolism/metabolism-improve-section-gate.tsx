"use client";

import { ImproveMetabolismPinnedCard } from "@/components/dashboard/metabolism/improve-metabolism-pinned-card";
import { ImproveMetabolismSection } from "@/components/dashboard/metabolism/improve-metabolism-section";
import { useMetabolismPinned } from "@/components/dashboard/metabolism/metabolism-pinned-context";

export function MetabolismImproveSectionGate() {
  const { showPinnedGoal } = useMetabolismPinned();
  if (showPinnedGoal) return <ImproveMetabolismPinnedCard />;
  return <ImproveMetabolismSection />;
}
