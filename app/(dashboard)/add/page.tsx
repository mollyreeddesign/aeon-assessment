import { SubpageHeader } from "@/components/dashboard/subpage-header";
import { Camera, Search } from "lucide-react";

export default function AddPage() {
  return (
    <div className="pb-28">
      <SubpageHeader
        title="Log food"
        subtitle="Search the database or add something quickly."
      />
      <div className="space-y-4 px-4 pt-2">
        <div className="flex gap-2 rounded-2xl bg-[#FDF9EB] p-2 shadow-[0_1px_5px_rgba(0,0,0,0.025)]">
          <div className="flex flex-1 items-center gap-2 rounded-xl bg-zinc-100 px-3 py-2.5">
            <Search className="h-5 w-5 shrink-0 text-zinc-400" strokeWidth={2} />
            <span className="text-sm text-zinc-400">Search foods & meals</span>
          </div>
          <button
            type="button"
            className="flex shrink-0 items-center justify-center rounded-xl bg-[#514c2410] px-4 text-[#200201] transition hover:bg-[#514c2420]"
            aria-label="Scan barcode"
          >
            <Camera className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["Breakfast", "Lunch", "Dinner", "Snack"].map((meal) => (
            <button
              key={meal}
              type="button"
              className="rounded-2xl bg-[#514c2410] py-4 text-sm font-semibold text-zinc-800 shadow-[0_1px_4px_rgba(0,0,0,0.022)] transition hover:bg-[#514c2420]"
            >
              {meal}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
