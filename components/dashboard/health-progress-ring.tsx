"use client";

import { useEffect, useState } from "react";

/** Must match the green arc `stroke-dasharray` transition duration. */
const RING_TRANSITION_MS = 850;
/** White overlay stroke-opacity fade — shorter = snappier. */
const OVERLAY_FADE_MS = 220;
/**
 * Begin the overlay fade this many ms before the ring sweep ends, so the wash
 * is mostly gone slightly before the green arc finishes.
 */
const OVERLAY_FADE_START_BEFORE_RING_END_MS = 80;

function HealthProgressRingInner({
  percent,
  overlayWhiteOpacity,
  className,
}: {
  percent: number;
  /** Max 0.4 = 40% opacity white on top of the green stroke; fades to 0 after the sweep. */
  overlayWhiteOpacity: number;
  className?: string;
}) {
  const strokeW = 6;
  const r = 47;
  const c = 2 * Math.PI * r;
  const p = Math.min(100, Math.max(0, percent));
  const dash = (p / 100) * c;

  const arcTransition = `stroke-dasharray ${RING_TRANSITION_MS}ms ease-in-out`;
  const overlayTransition = `${arcTransition}, stroke-opacity ${OVERLAY_FADE_MS}ms ease-in-out`;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden={true}
    >
      <defs>
        <linearGradient
          id="diaryHealthRingGreen"
          x1="18"
          y1="14"
          x2="92"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2BBD62" />
          <stop offset="0.4" stopColor="#2BBD62" />
          <stop offset="1" stopColor="#166534" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="#E8F5E9"
        strokeOpacity={0.95}
        strokeWidth={strokeW}
      />
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="url(#diaryHealthRingGreen)"
        strokeWidth={strokeW}
        strokeLinecap="round"
        strokeDasharray={`${dash} ${c}`}
        className="motion-reduce:!transition-none"
        style={{ transition: arcTransition }}
      />
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="white"
        strokeWidth={strokeW}
        strokeLinecap="round"
        strokeDasharray={`${dash} ${c}`}
        strokeOpacity={overlayWhiteOpacity}
        className="motion-reduce:!transition-none"
        style={{ transition: overlayTransition }}
      />
    </svg>
  );
}

type AnimatedHealthProgressRingProps = {
  targetPercent: number;
  className?: string;
};

/** Green arc animates clockwise from the top on mount (and when `targetPercent` changes). */
export function AnimatedHealthProgressRing({
  targetPercent,
  className,
}: AnimatedHealthProgressRingProps) {
  const [percent, setPercent] = useState(0);
  const [overlayWhiteOpacity, setOverlayWhiteOpacity] = useState(0.4);

  useEffect(() => {
    setPercent(0);
    setOverlayWhiteOpacity(0.4);
    const id = requestAnimationFrame(() => {
      setPercent(Math.min(100, Math.max(0, targetPercent)));
    });
    const overlayFadeStartDelay = Math.max(
      0,
      RING_TRANSITION_MS -
        OVERLAY_FADE_MS -
        OVERLAY_FADE_START_BEFORE_RING_END_MS,
    );
    const fadeTimer = window.setTimeout(() => {
      setOverlayWhiteOpacity(0);
    }, overlayFadeStartDelay);
    return () => {
      cancelAnimationFrame(id);
      window.clearTimeout(fadeTimer);
    };
  }, [targetPercent]);

  return (
    <HealthProgressRingInner
      percent={percent}
      overlayWhiteOpacity={overlayWhiteOpacity}
      className={className}
    />
  );
}
