"use client";

import Link from "next/link";
import { Flame } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { useMemo } from "react";

import {
  HEALTH_GOAL_CHECKLISTS,
  type HealthGoalChecklistId,
} from "@/components/dashboard/health-goal-checklists";
import {
  improveMetabolismHealthGoalLabel,
} from "@/components/dashboard/health-goals-data";
import { useHealthGoalsProgress } from "@/components/dashboard/health-goals-progress-context";
import { DashboardTopBar } from "@/components/dashboard/dashboard-top-bar";
import { useMetabolismPinned } from "@/components/dashboard/metabolism/metabolism-pinned-context";
import { SubpageHeader } from "@/components/dashboard/subpage-header";
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
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Z" />
    </svg>
  );
}

type GoalIcon = ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

const CHECKBOX_CLASS =
  "size-5 shrink-0 cursor-pointer rounded-[0.3rem] border-[1.5px] border-zinc-500 bg-[#FDF9EB] accent-[#200201] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400";

const CORE_GOAL_META: {
  id: Exclude<HealthGoalChecklistId, "metabolism">;
  title: string;
  blurb: string;
  Icon: GoalIcon;
}[] = [
  {
    id: "blood-pressure",
    title: "Lower Blood Pressure",
    blurb:
      "Sodium awareness, movement, and regular readings add up—your care team can help interpret trends over time.",
    Icon: DropSimpleIcon,
  },
  {
    id: "brain-health",
    title: "Improve Brain Health",
    blurb:
      "Sleep, omega-3s, and learning something new support focus, mood, and long-term cognitive resilience.",
    Icon: BrainIcon,
  },
];

const cardClass =
  "rounded-2xl border border-stone-200/80 bg-[#FDF9EB] px-4 py-4 shadow-[0_1px_4px_rgba(0,0,0,0.022)]";

const headerSurfaceClass = "bg-[#fde8d4]";

export function HealthGoalsPageView() {
  const { showPinnedGoal } = useMetabolismPinned();
  const { goalProgressPercent, isChecked, setChecked } = useHealthGoalsProgress();

  const { activeGoalCount, totalTasks, completedTasks } = useMemo(() => {
    const ids: HealthGoalChecklistId[] = ["blood-pressure", "brain-health"];
    if (showPinnedGoal) ids.push("metabolism");
    let total = 0;
    let done = 0;
    for (const gid of ids) {
      const items = HEALTH_GOAL_CHECKLISTS[gid].items;
      total += items.length;
      for (let i = 0; i < items.length; i++) {
        if (isChecked(gid, i)) done += 1;
      }
    }
    return {
      activeGoalCount: ids.length,
      totalTasks: total,
      completedTasks: done,
    };
  }, [showPinnedGoal, isChecked]);

  return (
    <div className="pb-28">
      <DashboardTopBar tone="light" />
      <SubpageHeader
        className="!pt-[calc(env(safe-area-inset-top,0px)+7rem)] !pb-[30px]"
        solidSurfaceClassName={headerSurfaceClass}
        title="Health Goals"
        titleBadgeText="Not Designed"
        subtitle="Daily checklists that mirror your home screen—track habits that support your screening results."
      />

      <div className="space-y-5 px-4 pt-5">
        <section className={cardClass}>
          <h2 className="font-serif text-lg font-semibold text-zinc-900">
            Today&apos;s checklist progress
          </h2>
          <div className="mt-3 flex items-end justify-between gap-4">
            <p className="font-sans text-4xl font-semibold tabular-nums leading-none text-zinc-900">
              {goalProgressPercent}%
            </p>
            <p className="max-w-[12rem] text-right text-xs leading-snug text-zinc-500">
              {completedTasks} of {totalTasks} tasks done across {activeGoalCount}{" "}
              active {activeGoalCount === 1 ? "goal" : "goals"}
            </p>
          </div>
          <div
            className="mt-4 h-2.5 overflow-hidden rounded-full bg-stone-200/90"
            role="presentation"
            aria-hidden
          >
            <div
              className="h-full rounded-full bg-emerald-600/90 transition-[width] duration-300 ease-out"
              style={{ width: `${goalProgressPercent}%` }}
            />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            Progress matches the Health Goals card on your home screen and feeds
            the same daily completion percentage used for your Health Score ring.
          </p>
        </section>

        <div className="grid grid-cols-2 gap-3">
          <div className={`${cardClass} flex flex-col justify-center py-3`}>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
              Active goals
            </p>
            <p className="mt-1 font-sans text-2xl font-semibold tabular-nums text-zinc-900">
              {activeGoalCount}
            </p>
          </div>
          <div className={`${cardClass} flex flex-col justify-center py-3`}>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
              Tasks today
            </p>
            <p className="mt-1 font-sans text-2xl font-semibold tabular-nums text-zinc-900">
              {totalTasks}
            </p>
            <p className="mt-0.5 text-[11px] text-zinc-500">in your lists</p>
          </div>
        </div>

        <section className={cardClass}>
          <h2 className="font-serif text-base font-semibold text-zinc-900">
            How goals connect to your plan
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-600">
            <li className="flex gap-2">
              <span className="font-semibold text-zinc-800">Domains</span>
              <span>
                Screening highlights where to focus; goals turn those themes
                into repeatable daily actions.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-zinc-800">Metabolism</span>
              <span>
                Pin &ldquo;Improve Metabolism&rdquo; from Metabolism to add its
                checklist here and include it in your progress totals.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-zinc-800">Consistency</span>
              <span>
                Partial completion still counts—aim for steady streaks rather
                than perfection.
              </span>
            </li>
          </ul>
        </section>

        {CORE_GOAL_META.map(({ id, title, blurb, Icon }) => {
          const { heading, items } = HEALTH_GOAL_CHECKLISTS[id];
          return (
            <section key={id} className={cardClass}>
              <div className="flex gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-[#514c2410] text-[#200201]">
                  <Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
                </div>
                <div className="min-w-0">
                  <h2 className="font-serif text-lg font-semibold text-zinc-900">
                    {title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {blurb}
                  </p>
                </div>
              </div>
              <h3 className="mt-5 border-t border-stone-200/80 pt-4 font-serif text-base font-semibold text-zinc-900">
                {heading}
              </h3>
              <ul className="mt-3 flex flex-col gap-3">
                {items.map((task, taskIndex) => (
                  <li key={task}>
                    <label className="flex cursor-pointer items-center gap-3 text-left">
                      <input
                        type="checkbox"
                        checked={isChecked(id, taskIndex)}
                        onChange={(e) =>
                          setChecked(id, taskIndex, e.target.checked)
                        }
                        className={CHECKBOX_CLASS}
                      />
                      <span
                        className={`text-sm leading-snug ${
                          isChecked(id, taskIndex)
                            ? "text-zinc-500 line-through"
                            : "text-zinc-800"
                        }`}
                      >
                        {task}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <section className={cardClass}>
          <div className="flex gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-[#514c2410] text-[#200201]">
              <Flame className="h-7 w-7" strokeWidth={1.75} aria-hidden />
            </div>
            <div className="min-w-0">
              <h2 className="font-serif text-lg font-semibold text-zinc-900">
                {improveMetabolismHealthGoalLabel}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                Walking, supplements, and meal prep reinforce steady energy and
                glucose-friendly routines—same tasks as on Home when this goal
                is pinned.
              </p>
            </div>
          </div>

          {showPinnedGoal ? (
            <>
              <h3 className="mt-5 border-t border-stone-200/80 pt-4 font-serif text-base font-semibold text-zinc-900">
                {HEALTH_GOAL_CHECKLISTS.metabolism.heading}
              </h3>
              <ul className="mt-3 flex flex-col gap-3">
                {HEALTH_GOAL_CHECKLISTS.metabolism.items.map((task, taskIndex) => (
                  <li key={task}>
                    <label className="flex cursor-pointer items-center gap-3 text-left">
                      <input
                        type="checkbox"
                        checked={isChecked("metabolism", taskIndex)}
                        onChange={(e) =>
                          setChecked("metabolism", taskIndex, e.target.checked)
                        }
                        className={CHECKBOX_CLASS}
                      />
                      <span
                        className={`text-sm leading-snug ${
                          isChecked("metabolism", taskIndex)
                            ? "text-zinc-500 line-through"
                            : "text-zinc-800"
                        }`}
                      >
                        {task}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <div className="mt-5 border-t border-stone-200/80 pt-4">
                <p className="text-sm leading-relaxed text-zinc-600">
                  Pin this goal from the Metabolism area to check off these tasks
                  and include them in your daily progress and Health Score.
                </p>
                <ul className="mt-3 space-y-2 rounded-xl bg-stone-100/60 px-3 py-3">
                  {HEALTH_GOAL_CHECKLISTS.metabolism.items.map((task) => (
                    <li
                      key={task}
                      className="flex gap-2 text-sm text-zinc-700"
                    >
                      <span className="shrink-0 text-zinc-400" aria-hidden>
                        ○
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href="/metabolism/edit-goal"
                    className="inline-flex items-center justify-center rounded-full bg-[#514c2410] px-[19px] py-[14px] text-md font-medium text-[#200201] transition hover:bg-[#514c2420] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
                  >
                    Pin to dashboard
                  </Link>
                  <Link
                    href="/metabolism/improve-health"
                    className="inline-flex items-center justify-center rounded-full border border-stone-300/80 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-stone-100/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
                  >
                    Metabolic health guide
                  </Link>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
