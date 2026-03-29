import { Smile } from "lucide-react";

type DayRatingCardProps = {
  title?: string;
  message: string;
};

export function DayRatingCard({
  title = "Day rating",
  message,
}: DayRatingCardProps) {
  return (
    <article className="mx-4 mt-5 rounded-3xl bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <div className="flex gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-300">
          <Smile className="h-8 w-8 text-white" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <h2 className="font-serif text-lg font-semibold text-zinc-900">
            {title}
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600">{message}</p>
        </div>
      </div>
      <div className="mt-5 border-t border-zinc-100 pt-4">
        <button
          type="button"
          className="text-xs font-bold uppercase tracking-widest text-[#16a34a] transition hover:text-emerald-700"
        >
          See more
        </button>
      </div>
    </article>
  );
}
