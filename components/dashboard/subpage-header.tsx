type SubpageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SubpageHeader({ title, subtitle }: SubpageHeaderProps) {
  return (
    <header className="relative overflow-hidden px-4 pb-10 pt-10 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_100%_0%,rgba(251,146,60,0.45),transparent_55%),radial-gradient(ellipse_90%_70%_at_0%_20%,rgba(52,211,153,0.55),transparent_50%),linear-gradient(155deg,#34d399_0%,#a78bfa_50%,#fb923c_100%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-black/5" aria-hidden />
      <div className="relative">
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{title}</h1>
        {subtitle ? (
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/90">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}
