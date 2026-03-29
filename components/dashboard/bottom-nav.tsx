"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TrendingUp } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

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

type NavItemProps = {
  href: string;
  label: string;
  Icon: NavIcon;
};

function NavItem({ href, label, Icon }: NavItemProps) {
  const pathname = usePathname();
  const active =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`flex flex-col items-center gap-0.5 pb-1 pt-2 text-[10px] font-medium tracking-wide transition ${
        active ? "text-[#16a34a]" : "text-zinc-400 hover:text-zinc-600"
      }`}
    >
      <Icon
        className="h-6 w-6"
        strokeWidth={active ? 2.25 : 1.75}
        aria-hidden
      />
      {label}
    </Link>
  );
}

export function BottomNav() {
  return (
    <nav
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center"
      aria-label="Main"
    >
      <div className="pointer-events-auto relative mx-auto w-full max-w-md px-3">
        <div className="rounded-t-3xl bg-white px-2 pb-[max(0.50rem,env(safe-area-inset-bottom))] pt-1 shadow-[0_-8px_30px_rgba(0,0,0,0.06)]">
          <div className="flex h-16 items-center justify-around">
            <NavItem href="/" label="Home" Icon={SquaresFourIcon} />
            <NavItem href="/domains" label="Domains" Icon={BrainIcon} />
            <NavItem href="/diets" label="Goals" Icon={TrendingUp} />
            <NavItem href="/recipes" label="Book" Icon={CalendarBlankIcon} />
          </div>
        </div>
      </div>
    </nav>
  );
}
