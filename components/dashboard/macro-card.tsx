import { CircleDashed } from "lucide-react";

const goals: {
  title: string;
  Icon?: typeof CircleDashed;
}[] = [
  { title: "Improve Metabolic Health", Icon: CircleDashed },
  { title: "Lower Blood Pressure" },
  { title: "Lower Blood Pressure" },
];

export function MacroCard() {
  return (
    <div className="relative z-10 -mt-16 mx-4 rounded-3xl bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
      <h2 className="mb-4 text-center text-lg font-semibold tracking-tight text-zinc-900">
        Health Goals
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {goals.map(({ title, Icon }, index) => (
          <div
            key={`${title}-${index}`}
            className="flex flex-col items-center gap-2 text-center"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center">
              {Icon ? (
                <Icon
                  className="h-8 w-8 text-zinc-400"
                  strokeWidth={1.5}
                  aria-hidden
                />
              ) : null}
            </div>
            <p className="text-[11px] font-semibold leading-snug text-zinc-900 sm:text-xs">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
