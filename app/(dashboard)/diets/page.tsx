import { SubpageHeader } from "@/components/dashboard/subpage-header";

const plans = [
  {
    name: "Balanced",
    detail: "Moderate carbs, varied whole foods.",
    tag: "Recommended",
  },
  {
    name: "High protein",
    detail: "Extra protein to support training.",
    tag: "",
  },
  {
    name: "Low carb",
    detail: "Fewer carbs, more fats and greens.",
    tag: "",
  },
];

export default function DietsPage() {
  return (
    <div className="pb-28">
      <SubpageHeader
        title="Diets"
        subtitle="Pick a plan that matches your goals."
      />
      <ul className="space-y-3 px-4 pt-2">
        {plans.map((p) => (
          <li key={p.name}>
            <button
              type="button"
              className="flex w-full flex-col items-start rounded-2xl bg-[#514c2410] p-4 text-left shadow-[0_1px_4px_rgba(0,0,0,0.022)] transition hover:bg-[#514c2420]"
            >
              <div className="flex w-full items-center justify-between gap-2">
                <span className="font-serif text-lg font-semibold text-zinc-900">
                  {p.name}
                </span>
                {p.tag ? (
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                    {p.tag}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-zinc-600">{p.detail}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
