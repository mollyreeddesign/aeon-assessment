/** Past year, three samples per series (illustrative). */
const YEAR_DATA = {
  labels: ["Q1", "Q2", "Q3"] as const,
  /** Dips at Q2 then rises—wavy path between points. */
  screening: [80, 68, 76],
  /** Steady decline across the year. */
  overall: [82, 74, 66],
};

const SMOOTHING = 0.18;

function smoothLinePath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }

  const line = (
    a: { x: number; y: number },
    b: { x: number; y: number },
  ) => {
    const lx = b.x - a.x;
    const ly = b.y - a.y;
    return {
      len: Math.hypot(lx, ly),
      ang: Math.atan2(ly, lx),
    };
  };

  const cp = (
    cur: { x: number; y: number },
    prev: { x: number; y: number } | undefined,
    next: { x: number; y: number } | undefined,
    rev: boolean,
  ) => {
    const p = prev ?? cur;
    const n = next ?? cur;
    const o = line(p, n);
    const ang = o.ang + (rev ? Math.PI : 0);
    const len = o.len * SMOOTHING;
    return {
      x: cur.x + Math.cos(ang) * len,
      y: cur.y + Math.sin(ang) * len,
    };
  };

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const cp1 = cp(p0, points[i - 1], p1, false);
    const cp2 = cp(p1, p0, points[i + 2], true);
    d += ` C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

function buildAreaPath(linePath: string, lastX: number, bottomY: number): string {
  const firstMatch = /M\s*([\d.]+)\s*([\d.]+)/.exec(linePath);
  const firstX = firstMatch ? Number(firstMatch[1]) : 0;
  return `${linePath} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`;
}

function buildYearChart() {
  const { labels, screening, overall } = YEAR_DATA;
  const w = 320;
  const h = 140;
  const padX = 12;
  const padY = 14;
  const bottomY = h - padY;
  const chartH = h - padY * 2;

  const all = [...screening, ...overall];
  const vmin = Math.min(...all) - 6;
  const vmax = Math.max(...all) + 6;
  const scaleY = (v: number) =>
    bottomY - ((v - vmin) / (vmax - vmin)) * chartH;

  const n = labels.length;
  const denom = Math.max(1, n - 1);
  const step = (w - padX * 2) / denom;

  const xAt = (i: number) => padX + i * step;
  const ptsS = screening.map((v, i) => ({
    x: xAt(i),
    y: scaleY(v),
  }));
  const ptsO = overall.map((v, i) => ({
    x: xAt(i),
    y: scaleY(v),
  }));

  const pathS = smoothLinePath(ptsS);
  const pathO = smoothLinePath(ptsO);
  const lastX = padX + (n - 1) * step;
  const areaS = buildAreaPath(pathS, lastX, bottomY);
  const areaO = buildAreaPath(pathO, lastX, bottomY);

  const lastSi = screening[n - 1] ?? 0;
  const lastOi = overall[n - 1] ?? 0;
  const prevSi = screening[n - 2] ?? lastSi;
  const prevOi = overall[n - 2] ?? lastOi;
  const deltaS =
    prevSi !== 0 ? Math.round(((lastSi - prevSi) / prevSi) * 100) : 0;
  const deltaO =
    prevOi !== 0 ? Math.round(((lastOi - prevOi) / prevOi) * 100) : 0;
  const trendVsPrior = Math.round((deltaS + deltaO) / 2);
  const avgS = Math.round(
    screening.reduce((a, b) => a + b, 0) / screening.length,
  );
  const avgO = Math.round(
    overall.reduce((a, b) => a + b, 0) / overall.length,
  );

  return {
    chart: {
      w,
      h: h + 22,
      chartH: h,
      padX,
      bottomY,
      labels: [...labels],
      ptsS,
      ptsO,
      pathS,
      pathO,
      areaS,
      areaO,
      gridYs: [0.25, 0.5, 0.75].map((t) => padY + t * chartH),
    },
    stats: {
      avgScreening: avgS,
      avgOverall: avgO,
      trendVsPrior,
    },
  };
}

const { chart, stats } = buildYearChart();

export function ResultsTimeline() {
  return (
    <section className="rounded-2xl border border-stone-200/80 bg-[#FDF9EB] px-4 py-4 shadow-[0_1px_4px_rgba(0,0,0,0.022)]">
      <div>
        <h3 className="font-serif text-lg font-semibold text-zinc-900">
          Your Results
        </h3>
        <p className="mt-1 text-sm text-zinc-500">
          Screening status and overall score over the past year (illustrative,
          three points per line).
        </p>
      </div>

      <div className="legend mt-4 flex flex-wrap items-center justify-center gap-6 text-xs">
        <span className="inline-flex items-center gap-2 text-zinc-700">
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500"
            aria-hidden
          />
          Screening status
        </span>
        <span className="inline-flex items-center gap-2 text-zinc-700">
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full bg-violet-500"
            aria-hidden
          />
          Overall score
        </span>
      </div>

      <div className="mt-3 overflow-x-auto">
        <svg
          viewBox={`0 0 ${chart.w} ${chart.h}`}
          className="mx-auto block w-full min-w-[280px] max-w-md"
          role="img"
          aria-label="Screening status and overall score over the past year"
        >
          <defs>
            <linearGradient
              id="gradScreening"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradOverall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" stopOpacity={0.32} />
              <stop offset="100%" stopColor="#a855f7" stopOpacity={0} />
            </linearGradient>
          </defs>

          {chart.gridYs.map((gy) => (
            <line
              key={gy}
              x1={chart.padX}
              y1={gy}
              x2={chart.w - chart.padX}
              y2={gy}
              stroke="#e7e5e4"
              strokeWidth={1}
              strokeDasharray="4 6"
              opacity={0.85}
            />
          ))}

          <path d={chart.areaO} fill="url(#gradOverall)" />
          <path d={chart.areaS} fill="url(#gradScreening)" />

          <path
            d={chart.pathO}
            fill="none"
            stroke="#9333ea"
            strokeWidth={2.25}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={chart.pathS}
            fill="none"
            stroke="#0284c7"
            strokeWidth={2.25}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {chart.ptsO.map((p, i) => (
            <circle
              key={`o-${i}`}
              cx={p.x}
              cy={p.y}
              r={3.5}
              className="fill-white stroke-violet-600"
              strokeWidth={2}
            />
          ))}
          {chart.ptsS.map((p, i) => (
            <circle
              key={`s-${i}`}
              cx={p.x}
              cy={p.y}
              r={3.5}
              className="fill-white stroke-sky-600"
              strokeWidth={2}
            />
          ))}

          {chart.labels.map((lab, i) => {
            const span = Math.max(1, chart.labels.length - 1);
            const x = chart.padX + i * ((chart.w - chart.padX * 2) / span);
            return (
              <text
                key={`${lab}-${i}`}
                x={x}
                y={chart.chartH + 14}
                textAnchor="middle"
                className="fill-zinc-400 text-[10px] font-medium"
              >
                {lab}
              </text>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-stone-200/80 pt-4 text-center">
        <div>
          <p className="text-[11px] font-medium text-zinc-500">
            Avg. screening
          </p>
          <p className="mt-1 font-sans text-lg font-semibold tabular-nums text-zinc-900">
            {stats.avgScreening}%
          </p>
        </div>
        <div>
          <p className="text-[11px] font-medium text-zinc-500">
            Avg. overall
          </p>
          <p className="mt-1 font-sans text-lg font-semibold tabular-nums text-zinc-900">
            {stats.avgOverall}%
          </p>
        </div>
        <div>
          <p className="text-[11px] font-medium text-zinc-500">vs prior</p>
          <p
            className={`mt-1 font-sans text-lg font-semibold tabular-nums ${
              stats.trendVsPrior > 0
                ? "text-cyan-600"
                : stats.trendVsPrior < 0
                  ? "text-rose-600"
                  : "text-zinc-700"
            }`}
          >
            {stats.trendVsPrior > 0 ? "+" : ""}
            {stats.trendVsPrior}%
          </p>
        </div>
      </div>
    </section>
  );
}
