"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Apple, BookMarked, ChefHat, TrendingUp } from "lucide-react";

type NavItemProps = {
  href: string;
  label: string;
  Icon: typeof BookMarked;
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
        <div className="rounded-t-3xl bg-white px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-1 shadow-[0_-8px_30px_rgba(0,0,0,0.06)]">
          <div className="flex h-16 items-center justify-around">
            <NavItem href="/" label="Diary" Icon={BookMarked} />
            <NavItem href="/progress" label="Progress" Icon={TrendingUp} />
            <NavItem href="/diets" label="Diets" Icon={Apple} />
            <NavItem href="/recipes" label="Recipes" Icon={ChefHat} />
          </div>
        </div>
      </div>
    </nav>
  );
}
