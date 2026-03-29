"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  HEALTH_GOAL_CHECKLISTS,
  type HealthGoalChecklistId,
} from "@/components/dashboard/health-goal-checklists";
import { useMetabolismPinned } from "@/components/dashboard/metabolism/metabolism-pinned-context";

function checkboxKey(goalId: HealthGoalChecklistId, index: number) {
  return `${goalId}:${index}`;
}

type HealthGoalsProgressValue = {
  goalProgressPercent: number;
  isChecked: (goalId: HealthGoalChecklistId, index: number) => boolean;
  setChecked: (
    goalId: HealthGoalChecklistId,
    index: number,
    value: boolean,
  ) => void;
};

const HealthGoalsProgressContext =
  createContext<HealthGoalsProgressValue | null>(null);

export function HealthGoalsProgressProvider({ children }: { children: ReactNode }) {
  const { showPinnedGoal } = useMetabolismPinned();
  const [checks, setChecks] = useState<Record<string, boolean>>({});

  const activeGoalIds: HealthGoalChecklistId[] = useMemo(() => {
    const base: HealthGoalChecklistId[] = ["blood-pressure", "brain-health"];
    if (showPinnedGoal) base.push("metabolism");
    return base;
  }, [showPinnedGoal]);

  const goalProgressPercent = useMemo(() => {
    let total = 0;
    let checked = 0;
    for (const gid of activeGoalIds) {
      const items = HEALTH_GOAL_CHECKLISTS[gid].items;
      total += items.length;
      for (let i = 0; i < items.length; i++) {
        if (checks[checkboxKey(gid, i)]) checked += 1;
      }
    }
    if (total === 0) return 0;
    return Math.round((checked / total) * 100);
  }, [activeGoalIds, checks]);

  const isChecked = useCallback(
    (goalId: HealthGoalChecklistId, index: number) =>
      !!checks[checkboxKey(goalId, index)],
    [checks],
  );

  const setChecked = useCallback(
    (goalId: HealthGoalChecklistId, index: number, value: boolean) => {
      setChecks((prev) => ({
        ...prev,
        [checkboxKey(goalId, index)]: value,
      }));
    },
    [],
  );

  const value = useMemo(
    () => ({ goalProgressPercent, isChecked, setChecked }),
    [goalProgressPercent, isChecked, setChecked],
  );

  return (
    <HealthGoalsProgressContext.Provider value={value}>
      {children}
    </HealthGoalsProgressContext.Provider>
  );
}

export function useHealthGoalsProgress() {
  const ctx = useContext(HealthGoalsProgressContext);
  if (!ctx) {
    throw new Error(
      "useHealthGoalsProgress must be used within HealthGoalsProgressProvider",
    );
  }
  return ctx;
}
