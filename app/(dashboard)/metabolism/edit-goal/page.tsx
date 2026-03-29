"use client";

import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

import { DashboardTopBar } from "@/components/dashboard/dashboard-top-bar";
import {
  improveMetabolismDailyTasks,
  improveMetabolismHealthGoalLabel,
} from "@/components/dashboard/health-goals-data";
import { SubpageHeader } from "@/components/dashboard/subpage-header";
import { useMetabolismPinned } from "@/components/dashboard/metabolism/metabolism-pinned-context";

const headerSurfaceClass = "bg-[#fde8d4]";

export default function EditMetabolismGoalPage() {
  const router = useRouter();
  const { setShowPinnedGoal } = useMetabolismPinned();
  const [goalTitle, setGoalTitle] = useState(improveMetabolismHealthGoalLabel);
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>(() =>
    improveMetabolismDailyTasks.map((task) => ({ text: task, done: false })),
  );
  const canRemove = tasks.length > 1;

  return (
    <div className="pb-28">
      <DashboardTopBar tone="light" />
      <SubpageHeader
        backHref="/metabolism"
        backLabel="Metabolism"
        className="!pt-[calc(env(safe-area-inset-top,0px)+7rem)] !pb-[30px]"
        solidSurfaceClassName={headerSurfaceClass}
        title="Edit Goal"
      />
      <section className="px-4 pt-5">
        <div className="rounded-2xl border border-stone-200/80 bg-[#FDF9EB] px-4 py-5 shadow-[0_1px_4px_rgba(0,0,0,0.022)]">
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Goal title
            </span>
            <input
              value={goalTitle}
              onChange={(event) => setGoalTitle(event.target.value)}
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-900 outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
            />
          </label>

          <ul className="mt-4 space-y-3 border-t border-zinc-100 pt-4">
            {tasks.map((task, index) => (
              <li key={`${index}-${task.text}`} className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={(event) =>
                    setTasks((prev) =>
                      prev.map((item, itemIndex) =>
                        itemIndex === index
                          ? { ...item, done: event.target.checked }
                          : item,
                      ),
                    )
                  }
                  className="mt-2 size-4 shrink-0 rounded-sm border border-zinc-400 bg-white accent-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
                />
                <input
                  value={task.text}
                  onChange={(event) =>
                    setTasks((prev) =>
                      prev.map((item, itemIndex) =>
                        itemIndex === index
                          ? { ...item, text: event.target.value }
                          : item,
                      ),
                    )
                  }
                  className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-800 outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
                />
                <button
                  type="button"
                  onClick={() =>
                    setTasks((prev) => prev.filter((_, itemIndex) => itemIndex !== index))
                  }
                  disabled={!canRemove}
                  aria-label={`Remove task ${index + 1}`}
                  className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <MinusCircle className="h-4 w-4" strokeWidth={2} aria-hidden />
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setTasks((prev) => [...prev, { text: "", done: false }])}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 underline decoration-zinc-500/70 underline-offset-4 transition hover:text-zinc-900"
          >
            <PlusCircle className="h-4 w-4" strokeWidth={2} aria-hidden />
            Add item
          </button>
          <button
            type="button"
            onClick={() => {
              setShowPinnedGoal(true);
              router.push("/");
            }}
            className="mt-5 flex w-full items-center justify-center rounded-full bg-[#514c2410] px-5 py-3 text-sm font-semibold text-[#200201] transition hover:bg-[#514c2420] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
          >
            Save and Pin
          </button>
        </div>
      </section>
    </div>
  );
}
