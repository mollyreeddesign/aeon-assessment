"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TrendingUp } from "lucide-react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentType,
  type SVGProps,
} from "react";

import { BrainIcon } from "@/components/icons/brain-icon";

function SquaresFourIcon({
  className,
  strokeWidth: _strokeWidth,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      fill="currentColor"
      data-testid="icon-squaresFour"
      className={className}
      aria-hidden
      {...props}
    >
      <g>
        <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z" />
      </g>
    </svg>
  );
}

function CalendarBlankIcon({
  className,
  strokeWidth: _strokeWidth,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      fill="currentColor"
      data-testid="icon-calendarBlank"
      className={className}
      aria-hidden
      {...props}
    >
      <g>
        <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" />
      </g>
    </svg>
  );
}

type NavIcon = ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

const NAV_ITEMS: { href: string; label: string; Icon: NavIcon }[] = [
  { href: "/", label: "Home", Icon: SquaresFourIcon },
  { href: "/domains", label: "Domains", Icon: BrainIcon },
  { href: "/diets", label: "Goals", Icon: TrendingUp },
  { href: "/recipes", label: "Book", Icon: CalendarBlankIcon },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function BottomNav() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pill, setPill] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });
  const [motionReady, setMotionReady] = useState(false);

  const updatePill = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeIndex = NAV_ITEMS.findIndex((item) =>
      isActive(pathname, item.href),
    );
    if (activeIndex < 0) return;
    const el = itemRefs.current[activeIndex];
    if (!el) return;
    const cr = container.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    setPill({
      left: er.left - cr.left,
      top: er.top - cr.top,
      width: er.width,
      height: er.height,
      opacity: 1,
    });
  }, [pathname]);

  useLayoutEffect(() => {
    updatePill();
    const id = requestAnimationFrame(() => setMotionReady(true));
    return () => cancelAnimationFrame(id);
  }, [updatePill]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver(() => updatePill());
    ro.observe(container);
    window.addEventListener("resize", updatePill);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updatePill);
    };
  }, [updatePill]);

  return (
    <nav
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center"
      aria-label="Main"
    >
      <div className="pointer-events-auto relative mx-auto w-full max-w-md px-3">
        <div className="rounded-t-3xl bg-[#FEFCF6] px-2 pb-[max(0.50rem,env(safe-area-inset-bottom))] pt-1 shadow-[0_-3px_12px_rgba(0,0,0,0.035)]">
          <div
            ref={containerRef}
            className="relative flex h-16 items-center justify-around"
          >
            <div
              className={`pointer-events-none absolute z-0 rounded-2xl bg-[#fda87b] ${
                motionReady
                  ? "transition-[left,top,width,height,opacity] duration-[340ms] ease-[cubic-bezier(0.33,1,0.68,1)]"
                  : "transition-none"
              }`}
              style={{
                left: pill.left,
                top: pill.top,
                width: pill.width,
                height: pill.height,
                opacity: pill.opacity,
              }}
              aria-hidden
            />
            {NAV_ITEMS.map(({ href, label, Icon }, i) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className={`relative z-10 flex min-w-[4rem] flex-col items-center gap-0.5 rounded-2xl px-3 py-1.5 text-[10px] font-medium tracking-wide transition-colors ${
                    active
                      ? "text-[#200201]"
                      : "text-zinc-400 hover:bg-black/[0.04] hover:text-zinc-600"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon
                    className="h-6 w-6 shrink-0"
                    strokeWidth={active ? 2.25 : 1.75}
                    aria-hidden
                  />
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
