const points = [
  { label: "Apr", value: 86 },
  { label: "May", value: 78 },
  { label: "Jun", value: 70 },
] as const;

export function ResultsTimeline() {
  const w = 280;
  const h = 72;
  const pad = 16;
  const values = points.map((p) => p.value);
  const vmin = Math.min(...values) - 4;
  const vmax = Math.max(...values) + 4;
  const scaleY = (v: number) =>
    h - pad - ((v - vmin) / (vmax - vmin)) * (h - pad * 2);
  const step = (w - pad * 2) / (points.length - 1);
  const coords = points.map((p, i) => {
    const x = pad + i * step;
    const y = scaleY(p.value);
    return { x, y, ...p };
  });
  const pathD = coords
    .map((c, i) => `${i === 0 ? "M" : "L"} ${c.x} ${c.y}`)
    .join(" ");

  return (
    <section className="rounded-2xl border border-stone-200/80 bg-white px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <h3 className="font-serif text-lg font-semibold text-zinc-900">
        Your Results
      </h3>
      <p className="mt-1 text-xs text-zinc-500">
        Metabolic health score over recent visits (illustrative trend).
      </p>
      <div className="mt-4 overflow-x-auto">
        <svg
          viewBox={`0 0 ${w} ${h + 28}`}
          className="mx-auto block w-full min-w-[260px] max-w-md"
          role="img"
          aria-label="Line chart of metabolic health score by month"
        >
          <path
            d={pathD}
            fill="none"
            stroke="#94a3b8"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {coords.map((c) => (
            <g key={c.label}>
              <circle
                cx={c.x}
                cy={c.y}
                r={5}
                className="fill-white stroke-[#4a5d23] stroke-[2.5]"
              />
            </g>
          ))}
          {coords.map((c) => (
            <text
              key={`${c.label}-t`}
              x={c.x}
              y={h + 4}
              textAnchor="middle"
              className="fill-zinc-500 text-[9px] font-medium"
            >
              {c.label}
            </text>
          ))}
        </svg>
      </div>
    </section>
  );
}
