"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import type { SVGProps } from "react";

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

type ExpandableGoalId = "blood-pressure" | "brain-health";

const GOAL_CHECKLISTS: Record<
  ExpandableGoalId,
  { heading: string; items: string[] }
> = {
  "blood-pressure": {
    heading: "Lower Blood Pressure",
    items: [
      "Stay under ~2,300 mg sodium on most days",
      "Aim for 150+ minutes of moderate activity weekly",
      "Take home blood pressure readings on a consistent schedule",
    ],
  },
  "brain-health": {
    heading: "Improve Brain Health",
    items: [
      "Sleep 7–8 hours on a regular schedule",
      "Eat omega-3 rich foods a few times per week",
      "Learn or practice something new (language, music, skills)",
    ],
  },
};

const goals: {
  title: string;
  kind: "goal" | "add";
  goalId?: ExpandableGoalId;
  Icon?: typeof BrainIcon | typeof DropSimpleIcon;
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
  { title: "Add a Goal", kind: "add" },
];

const checkboxClass =
  "mt-0.5 size-4 shrink-0 cursor-pointer rounded-sm border border-zinc-400 bg-[#FDF9EB] accent-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400";

export function HealthGoalCard() {
  const [expanded, setExpanded] = useState<ExpandableGoalId | null>(null);

  function toggleGoal(id: ExpandableGoalId) {
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
        {goals.map(({ title, kind, goalId, Icon }, index) =>
          kind === "add" ? (
            <button
              key={`${title}-${index}`}
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
                {title}
              </p>
            </button>
          ) : (
            <button
              key={`${title}-${index}`}
              type="button"
              onClick={() => goalId && toggleGoal(goalId)}
              aria-expanded={goalId ? expanded === goalId : false}
              aria-controls={
                goalId ? `goal-checklist-${goalId}` : undefined
              }
              className="flex flex-col items-center gap-2 text-center transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-colors ${
                  goalId && expanded === goalId
                    ? "border border-[#200201] bg-[#200201]"
                    : "border border-black/10 bg-[#514c2410]"
                } duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`}
              >
                {Icon ? (
                  <Icon
                    className={`h-7 w-7 transition-colors ${
                      goalId && expanded === goalId
                        ? "text-[#FDF9EB]"
                        : "text-[#200201]"
                    } duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                ) : null}
              </div>
              <p className="text-[13px] font-semibold leading-snug text-zinc-900 sm:text-base">
                {title}
              </p>
            </button>
          ),
        )}
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
                {GOAL_CHECKLISTS[expanded].heading}
              </h3>
              <ul className="mt-3 flex flex-col gap-3">
                {GOAL_CHECKLISTS[expanded].items.map((task) => (
                  <li key={task}>
                    <label className="flex cursor-pointer items-start gap-3 text-left">
                      <input type="checkbox" className={checkboxClass} />
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
