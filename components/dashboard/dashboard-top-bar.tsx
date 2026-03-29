import { BrandLogo } from "@/components/dashboard/brand-logo";

type DashboardTopBarProps = {
  /** Use on light header backgrounds (e.g. mint) so the logo stays visible. */
  tone?: "dark" | "light";
};

/**
 * Fixed logo + profile row; stays visible while the diary scrolls.
 */
export function DashboardTopBar({ tone = "dark" }: DashboardTopBarProps) {
  const isLight = tone === "light";

  return (
    <div
      className={`fixed left-1/2 top-0 z-[60] w-full max-w-md -translate-x-1/2 bg-transparent px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] ${
        isLight ? "text-zinc-900" : "text-white"
      }`}
    >
      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div aria-hidden />
        <BrandLogo
          className={
            isLight
              ? "h-7 w-auto text-zinc-900 drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
              : "h-7 w-auto text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]"
          }
        />
        <div className="flex justify-end">
          <button
            type="button"
            className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 shadow-sm transition hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isLight
                ? "focus-visible:outline-zinc-400"
                : "focus-visible:outline-white/80"
            }`}
            aria-label="Profile — you have notifications"
          >
            <span className="font-sans text-sm font-bold tracking-tight">MR</span>
            <span
              className={`absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ${
                isLight ? "ring-[#e2f6c8]" : "ring-white"
              }`}
              aria-hidden
            />
          </button>
        </div>
      </div>
    </div>
  );
}
