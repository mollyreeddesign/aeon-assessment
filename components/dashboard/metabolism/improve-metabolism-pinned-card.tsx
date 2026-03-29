"use client";

import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

import {
  improveMetabolismDailyGoalsHeading,
  improveMetabolismDailyTasks,
  improveMetabolismHealthGoalLabel,
} from "@/components/dashboard/health-goals-data";

const checkboxClass =
  "mt-0.5 size-4 shrink-0 cursor-pointer rounded-sm border border-zinc-400 bg-[#FDF9EB] accent-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400";

export function ImproveMetabolismPinnedCard() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setExpanded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="rounded-2xl border border-stone-200/80 bg-[#FDF9EB] px-4 py-5 shadow-[0_1px_4px_rgba(0,0,0,0.022)]">
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        aria-controls="improve-metabolism-checklist"
        className="flex w-full items-start gap-3 text-left transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
      >
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            expanded
              ? "border border-[#200201] bg-[#200201]"
              : "border border-black/10 bg-[#514c2410]"
          }`}
        >
          <Lightbulb
            className={`h-5 w-5 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              expanded ? "text-[#FDF9EB]" : "text-[#200201]"
            }`}
            strokeWidth={1.75}
            aria-hidden
          />
        </div>
        <div className="min-w-0 pt-1">
          <h3 className="font-serif text-lg font-semibold leading-snug text-zinc-900">
            Improve Metabolism
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500">
            Daily habits from your pinned goal.
          </p>
        </div>
      </button>

      <div
        id="improve-metabolism-checklist"
        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          expanded
            ? "mt-4 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-stone-200/80 pt-4">
            <h4 className="font-serif text-base font-semibold text-zinc-900">
              {improveMetabolismDailyGoalsHeading}
            </h4>
            <ul className="mt-3 flex flex-col gap-3">
              {improveMetabolismDailyTasks.map((task) => (
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
        </div>
      </div>
    </section>
  );
}
