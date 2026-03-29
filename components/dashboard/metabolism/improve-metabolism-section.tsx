import Link from "next/link";
import { ChevronRight, Lightbulb, Pencil } from "lucide-react";

const tips: { heading: string; body: string }[] = [
  {
    heading: "Balance carbohydrates",
    body: "Spread carbs across meals and pair them with protein or fiber to smooth glucose swings.",
  },
  {
    heading: "Prioritize sleep",
    body: "Consistent sleep supports insulin sensitivity and appetite regulation—aim for a regular wind-down.",
  },
  {
    heading: "Move after meals",
    body: "A short walk after eating can help your body use glucose more efficiently the same day.",
  },
];

export function ImproveMetabolismSection() {
  return (
    <section className="rounded-2xl border border-stone-200/80 bg-white px-4 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="flex gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-[#200201]">
          <Lightbulb className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </div>
        <div className="min-w-0">
          <h3 className="font-serif text-lg font-semibold leading-snug text-zinc-900">
            How to improve Metabolic Health
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-zinc-500">
            Small, steady habits add up. 
          </p>
        </div>
      </div>
      <ul className="mt-5 space-y-4 border-t border-zinc-100 pt-5">
        {tips.map((item) => (
          <li key={item.heading}>
            <p className="font-sans text-sm font-semibold text-zinc-900">
              {item.heading}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
      
      <Link
        href="/metabolism/edit-goal"
        className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-zinc-200 px-[19px] py-[14px] text-md font-medium text-[#200201] transition hover:bg-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
      >
        <Pencil
          className="h-4 w-4 shrink-0 text-[#200201]"
          strokeWidth={2.5}
          aria-hidden
        />
        Pin to Dashboard
      </Link>
    </section>
  );
}
