type SubpageHeaderProps = {
  title: string;
  subtitle?: string;
  /** Appended to the header root (e.g. override padding when using `DashboardTopBar`). */
  className?: string;
  /**
   * When set, replaces the gradient with this solid layer (e.g. `bg-[#e2f6c8]`).
   * Title and subtitle switch to dark text for contrast.
   */
  solidSurfaceClassName?: string;
};

export function SubpageHeader({
  title,
  subtitle,
  className,
  solidSurfaceClassName,
}: SubpageHeaderProps) {
  const isSolid = Boolean(solidSurfaceClassName);

  return (
    <header
      className={`relative overflow-hidden px-4 ${
        isSolid
          ? "pb-10 pt-10 text-zinc-900"
          : "pb-10 pt-10 text-white"
      }${className ? ` ${className}` : ""}`}
    >
      {isSolid ? (
        <div
          className={`pointer-events-none absolute inset-0 ${solidSurfaceClassName}`}
          aria-hidden
        />
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_100%_0%,rgba(251,146,60,0.45),transparent_55%),radial-gradient(ellipse_90%_70%_at_0%_20%,rgba(52,211,153,0.55),transparent_50%),linear-gradient(155deg,#34d399_0%,#a78bfa_50%,#fb923c_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-black/5"
            aria-hidden
          />
        </>
      )}
      <div className="relative">
        <h1
          className={`font-serif text-3xl font-semibold tracking-tight ${
            isSolid ? "text-zinc-950" : ""
          }`}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className={`mt-2 max-w-sm text-sm leading-relaxed ${
              isSolid ? "text-zinc-700" : "text-white/90"
            }`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}
