import { SubpageHeader } from "@/components/dashboard/subpage-header";

const recipes = [
  { title: "Miso salmon bowl", kcal: 520, tag: "High protein" },
  { title: "Berry smoothie", kcal: 280, tag: "Quick" },
  { title: "Chickpea salad", kcal: 410, tag: "Veggie" },
];

export default function RecipesPage() {
  return (
    <div className="pb-28">
      <SubpageHeader
        title="Recipes"
        subtitle="Ideas that fit your nutrition targets."
      />
      <ul className="space-y-3 px-4 pt-2">
        {recipes.map((r) => (
          <li key={r.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 rounded-2xl bg-white p-4 text-left shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition hover:bg-zinc-50"
            >
              <div>
                <p className="font-serif text-lg font-semibold text-zinc-900">
                  {r.title}
                </p>
                <p className="mt-0.5 text-sm text-zinc-500">
                  {r.kcal} kcal · {r.tag}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                Open
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
