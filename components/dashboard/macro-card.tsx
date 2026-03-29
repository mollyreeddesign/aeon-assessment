"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { SVGProps } from "react";

import { BrainIcon } from "@/components/icons/brain-icon";
import {
  improveMetabolismDailyTasks,
  improveMetabolismGoalTitle,
} from "@/components/dashboard/health-goals-data";

function MetabolicHealthIcon({
  className,
  strokeWidth: _strokeWidth,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      data-testid="icon-metabolic-health"
      className={className}
      aria-hidden
      {...props}
    >
      <path
        d="M6.75 12.75H3C2.80109 12.75 2.61032 12.671 2.46967 12.5303C2.32902 12.3897 2.25 12.1989 2.25 12C2.25 11.8011 2.32902 11.6103 2.46967 11.4697C2.61032 11.329 2.80109 11.25 3 11.25H6.34875L7.62562 9.33375C7.69409 9.23087 7.78691 9.14651 7.89584 9.08816C8.00477 9.0298 8.12643 8.99927 8.25 8.99927C8.37357 8.99927 8.49523 9.0298 8.60416 9.08816C8.71309 9.14651 8.80591 9.23087 8.87438 9.33375L11.25 12.8962L12.1256 11.5837C12.1942 11.481 12.287 11.3968 12.396 11.3386C12.5049 11.2803 12.6265 11.2499 12.75 11.25H15C15.1989 11.25 15.3897 11.329 15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303C15.3897 12.671 15.1989 12.75 15 12.75H13.1512L11.8744 14.6662C11.8059 14.7691 11.7131 14.8535 11.6042 14.9118C11.4952 14.9702 11.3736 15.0007 11.25 15.0007C11.1264 15.0007 11.0048 14.9702 10.8958 14.9118C10.7869 14.8535 10.6941 14.7691 10.6256 14.6662L8.25 11.1019L7.37438 12.4144C7.30604 12.5175 7.21328 12.6021 7.10434 12.6606C6.99541 12.7192 6.87368 12.7499 6.75 12.75ZM16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 8.88281 1.5 8.95312 1.5 9.02344C1.50622 9.22235 1.5912 9.41065 1.73624 9.5469C1.88129 9.68316 2.07453 9.75622 2.27344 9.75C2.47235 9.74378 2.66065 9.6588 2.7969 9.51376C2.93316 9.36871 3.00622 9.17547 3 8.97656C3 8.92219 3 8.86687 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45206 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45206 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875C10.9847 18.7959 8.00344 16.95 5.74875 14.4928C5.61424 14.3461 5.42695 14.2589 5.22811 14.2502C5.02926 14.2416 4.83514 14.3124 4.68844 14.4469C4.54174 14.5814 4.45449 14.7687 4.44587 14.9675C4.43726 15.1664 4.50799 15.3605 4.6425 15.5072C7.56469 18.6947 11.4797 20.8209 11.6447 20.91C11.7539 20.9688 11.876 20.9995 12 20.9995C12.124 20.9995 12.2461 20.9688 12.3553 20.91C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

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

const goals: {
  title: string;
  Icon?:
    | typeof MetabolicHealthIcon
    | typeof BrainIcon
    | typeof DropSimpleIcon;
}[] = [
  { title: "Improve Metabolism", Icon: MetabolicHealthIcon },
  { title: "Lower Blood Pressure", Icon: DropSimpleIcon },
  { title: "Improve Brain Health", Icon: BrainIcon },
];

export function MacroCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative z-10 -mt-16 mx-4 rounded-3xl bg-white px-3 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
      <h2 className="mb-3 text-center text-xl font-semibold text-zinc-950">
        Health Goals
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {goals.map(({ title, Icon }, index) => (
          <div
            key={`${title}-${index}`}
            className="flex flex-col items-center gap-2 text-center"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-stone-100 shadow-md">
              {Icon ? (
                <Icon
                  className="h-7 w-7 text-[#200201]"
                  strokeWidth={1.5}
                  aria-hidden
                />
              ) : null}
            </div>
            <p className="text-[13px] font-semibold leading-snug text-zinc-900 sm:text-base">
              {title}
            </p>
          </div>
        ))}
      </div>

      <div
        id="health-goals-expanded"
        hidden={!expanded}
        className="mt-4 border-t border-zinc-100 pt-4 px-6"
      >
        <h3 className="text-left text-sm font-semibold text-zinc-900">
          {improveMetabolismGoalTitle}
        </h3>
        <ul className="mt-3 flex flex-col gap-3">
          {improveMetabolismDailyTasks.map((task) => (
            <li key={task}>
              <label className="flex cursor-pointer items-start gap-3 text-left">
                <input
                  type="checkbox"
                  className="mt-0.5 size-4 shrink-0 cursor-pointer rounded-sm border border-zinc-400 bg-white accent-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
                />
                <span className="text-sm leading-snug text-zinc-800">
                  {task}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          aria-controls="health-goals-expanded"
          className="inline-flex items-center gap-0.5 text-xs font-medium text-zinc-600 underline decoration-zinc-500/70 underline-offset-[3px] transition hover:text-zinc-900 hover:decoration-zinc-700 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
        >
          {expanded ? "View Less" : "View More"}
          <ChevronDown
            className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            strokeWidth={2.25}
            aria-hidden
          />
        </button>
      </div>
    </div>
  );
}
