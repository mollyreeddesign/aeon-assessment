import { SubpageHeader } from "@/components/dashboard/subpage-header";

export default function ProgressPage() {
  return (
    <div className="pb-28">
      <SubpageHeader
        title="Progress"
        subtitle="Trends for weight, nutrients, and habits will show here."
      />
      <div className="space-y-3 px-4 pt-2">
        {["This week", "This month", "All time"].map((label) => (
          <div
            key={label}
            className="rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          >
            <p className="text-sm font-semibold text-zinc-800">{label}</p>
            <div className="mt-4 flex h-24 items-end gap-1">
              {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-500/90 to-emerald-400/70"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
