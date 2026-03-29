"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { BrandLogo } from "@/components/dashboard/brand-logo";

type DashboardTopBarProps = {
  /** Use on light header backgrounds (e.g. mint) so the logo stays visible. */
  tone?: "dark" | "light";
};

/** Scroll distance (px) over which shrink + pill reach full strength. */
const SCROLL_RANGE = 100;
const LOGO_MAX_PX = 28;
const LOGO_MIN_PX = 20;

/**
 * Fixed logo + profile row; stays visible while the diary scrolls.
 * Logo scales down and a cream pill fades in behind it as the user scrolls.
 */
export function DashboardTopBar({ tone = "dark" }: DashboardTopBarProps) {
  const isLight = tone === "light";
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScroll = useCallback(() => {
    const y = typeof window !== "undefined" ? window.scrollY : 0;
    const p = Math.min(1, Math.max(0, y / SCROLL_RANGE));
    setScrollProgress((prev) => (Math.abs(prev - p) < 0.002 ? prev : p));
  }, []);

  useEffect(() => {
    updateScroll();
    const onScroll = () => updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateScroll]);

  const logoHeightPx = LOGO_MAX_PX - scrollProgress * (LOGO_MAX_PX - LOGO_MIN_PX);
  const pillOpacity = scrollProgress;

  const logoOnDark = (
    <span
      className="relative inline-flex shrink-0 items-center"
      style={{ height: logoHeightPx }}
    >
      <span
        className="flex h-full items-center transition-opacity duration-300 ease-out"
        style={{ opacity: 1 - pillOpacity * 0.98 }}
        aria-hidden
      >
        <BrandLogo className="h-full w-auto text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]" />
      </span>
      <span
        className="pointer-events-none absolute left-0 top-0 flex h-full items-center transition-opacity duration-300 ease-out"
        style={{ opacity: pillOpacity }}
        aria-hidden
      >
        <BrandLogo className="h-full w-auto text-zinc-900" />
      </span>
    </span>
  );

  const logoLightOnly = (
    <span
      className="inline-flex shrink-0 items-center"
      style={{ height: logoHeightPx }}
    >
      <BrandLogo className="h-full w-auto text-zinc-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.04)]" />
    </span>
  );

  return (
    <div
      className={`fixed left-1/2 top-0 z-[60] w-full max-w-md -translate-x-1/2 bg-transparent px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] ${
        isLight ? "text-zinc-900" : "text-white"
      }`}
    >
      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div aria-hidden />
        <div className="flex justify-center">
          <Link
            href="/"
            aria-label="Home"
            className={`inline-flex shrink-0 items-center justify-center rounded-full transition-[box-shadow] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isLight
                ? "focus-visible:outline-zinc-500"
                : "focus-visible:outline-white/80"
            }`}
            style={{
              backgroundColor: `rgba(253, 249, 235, ${pillOpacity * 0.98})`,
              boxShadow:
                pillOpacity > 0.08
                  ? `0 2px 12px rgba(0,0,0,${0.04 + pillOpacity * 0.05})`
                  : "none",
              paddingLeft: `${pillOpacity * 18}px`,
              paddingRight: `${pillOpacity * 18}px`,
              paddingTop: `${pillOpacity * 10}px`,
              paddingBottom: `${pillOpacity * 10}px`,
            }}
          >
            {isLight ? logoLightOnly : logoOnDark}
          </Link>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 shadow-[0_1px_2px_rgba(0,0,0,0.035)] transition hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isLight
                ? "focus-visible:outline-zinc-400"
                : "focus-visible:outline-white/80"
            }`}
            aria-label="Profile — you have notifications"
          >
            <span className="font-sans text-sm font-bold tracking-tight">MR</span>
            <span
              className={`absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 transition-[box-shadow] duration-300 ${
                isLight
                  ? "ring-[#e2f6c8]"
                  : scrollProgress > 0.35
                    ? "ring-[#FDF9EB]"
                    : "ring-white"
              }`}
              aria-hidden
            />
          </button>
        </div>
      </div>
    </div>
  );
}
