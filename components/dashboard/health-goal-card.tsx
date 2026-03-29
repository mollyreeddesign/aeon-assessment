"use client";

import { Flame, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ComponentType, SVGProps } from "react";

import {
  HEALTH_GOAL_CHECKLISTS,
  type HealthGoalChecklistId,
} from "@/components/dashboard/health-goal-checklists";
import { improveMetabolismHealthGoalLabel } from "@/components/dashboard/health-goals-data";
import { useHealthGoalsProgress } from "@/components/dashboard/health-goals-progress-context";
import { useMetabolismPinned } from "@/components/dashboard/metabolism/metabolism-pinned-context";
import { BrainIcon } from "@/components/icons/brain-icon";

function DropSimpleIcon({
  className,
  strokeWidth: _strokeWidth,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      fill="currentColor"
      data-testid="icon-dropSimple"
      className={className}
      aria-hidden
      {...props}
    >
      <g>
        <path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Z" />
      </g>
    </svg>
  );
}

type GoalIcon = ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

const CORE_GOALS: {
  title: string;
  kind: "goal";
  goalId: Exclude<HealthGoalChecklistId, "metabolism">;
  Icon: GoalIcon;
}[] = [
  {
    title: "Lower Blood Pressure",
    kind: "goal",
    goalId: "blood-pressure",
    Icon: DropSimpleIcon,
  },
  {
    title: "Improve Brain Health",
    kind: "goal",
    goalId: "brain-health",
    Icon: BrainIcon,
  },
];

const checkboxClass =
  "mt-0.5 size-4 shrink-0 cursor-pointer rounded-sm border border-zinc-400 bg-[#FDF9EB] accent-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400";

export function HealthGoalCard() {
  const { showPinnedGoal } = useMetabolismPinned();
  const { isChecked, setChecked } = useHealthGoalsProgress();
  const [expanded, setExpanded] = useState<HealthGoalChecklistId | null>(null);
  const didAutoExpandMetabolism = useRef(false);

  const thirdSlot:
    | { title: string; kind: "goal"; goalId: "metabolism"; Icon: GoalIcon }
    | { title: string; kind: "add" } = showPinnedGoal
    ? {
        title: improveMetabolismHealthGoalLabel,
        kind: "goal",
        goalId: "metabolism",
        Icon: Flame,
      }
    : { title: "Add a Goal", kind: "add" };

  const goals = [...CORE_GOALS, thirdSlot];

  useEffect(() => {
    if (!showPinnedGoal || didAutoExpandMetabolism.current) return;
    didAutoExpandMetabolism.current = true;
    const id = requestAnimationFrame(() => setExpanded("metabolism"));
    return () => cancelAnimationFrame(id);
  }, [showPinnedGoal]);

  function toggleGoal(id: HealthGoalChecklistId) {
    setExpanded((current) => (current === id ? null : id));
  }

  return (
    <div
      className="relative z-10 -mt-16 mx-4 overflow-hidden rounded-3xl bg-[#FDF9EB] px-3 py-5 shadow-[0_3px_12px_rgba(0,0,0,0.05)]"
    >
      <h2 className="mb-3 text-center text-xl font-semibold text-zinc-950">
        Health Goals
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {goals.map((item, index) => {
          if (item.kind === "add") {
            return (
              <button
                key={`${item.title}-${index}`}
                type="button"
                aria-label="Add a goal"
                className="flex flex-col items-center gap-2 text-center transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-dashed border-zinc-200/90 bg-zinc-50 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <Plus
                    className="h-7 w-7 text-zinc-400"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <p className="text-[13px] font-semibold leading-snug text-zinc-600 sm:text-base">
                  {item.title}
                </p>
              </button>
            );
          }
          const { title, goalId, Icon } = item;
          return (
            <button
              key={`${title}-${index}`}
              type="button"
              onClick={() => toggleGoal(goalId)}
              aria-expanded={expanded === goalId}
              aria-controls={`goal-checklist-${goalId}`}
              className="flex flex-col items-center gap-2 text-center transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-colors ${
                  expanded === goalId
                    ? "border border-[#200201] bg-[#200201]"
                    : "border border-black/10 bg-[#514c2410]"
                } duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`}
              >
                <Icon
                  className={`h-7 w-7 transition-colors ${
                    expanded === goalId
                      ? "text-[#FDF9EB]"
                      : "text-[#200201]"
                  } duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                  strokeWidth={1.5}
                  aria-hidden
                />
              </div>
              <p className="text-[13px] font-semibold leading-snug text-zinc-900 sm:text-base">
                {title}
              </p>
            </button>
          );
        })}
      </div>

      <div
        id={expanded ? `goal-checklist-${expanded}` : undefined}
        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          expanded ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {expanded ? (
            <div className="border-t border-stone-200/80 px-2 pt-4">
              <h3 className="text-left font-serif text-base font-semibold text-zinc-900">
                {HEALTH_GOAL_CHECKLISTS[expanded].heading}
              </h3>
              <ul className="mt-3 flex flex-col gap-3">
                {HEALTH_GOAL_CHECKLISTS[expanded].items.map((task, taskIndex) => (
                  <li key={task}>
                    <label className="flex cursor-pointer items-start gap-3 text-left">
                      <input
                        type="checkbox"
                        checked={isChecked(expanded, taskIndex)}
                        onChange={(event) =>
                          setChecked(expanded, taskIndex, event.target.checked)
                        }
                        className={checkboxClass}
                      />
                      <span className="text-sm leading-snug text-zinc-800">
                        {task}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
