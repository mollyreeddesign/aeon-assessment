import type { LucideIcon } from "lucide-react";
import { Calendar, FileText, LineChart } from "lucide-react";

type LucideAction = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconWrap: string | null;
  iconClass?: string;
};

type SpecialAction = {
  title: string;
  subtitle: string;
  variant: "aeon-round" | "book-scan";
};

type ActionItem = LucideAction | SpecialAction;

const actions: ActionItem[] = [
  {
    title: "Book a Scan",
    subtitle: "Check availability",
    variant: "book-scan",
  },
  {
    title: "Ask Fin about your Results",
    subtitle: "24/7 AI Support",
    variant: "aeon-round",
  },
  {
    title: "Health Goals",
    subtitle: "Personalized trends",
    icon: LineChart,
    iconWrap: "bg-emerald-100 text-emerald-800",
  },
  {
    title: "Records",
    subtitle: "All documents",
    icon: FileText,
    iconWrap: "bg-[#ecbbdf] text-zinc-900",
  },
];

function BookScanIcon() {
  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgb(233,246,208)]"
      aria-hidden
    >
      <Calendar className="h-7 w-7 text-[#200201]" strokeWidth={1.9} />
    </span>
  );
}

function AskAeonRoundIcon() {
  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgb(253,168,123)] shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]"
      aria-hidden
    >
      <svg
        width="65"
        height="70"
        viewBox="0 0 65 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[26px] w-[24px] shrink-0 text-[#200201]"
      >
        <path
          d="M64.7514 22.2127V10.5104C53.5336 7.50356 40.3443 15.1561 34.4637 30.651L39.2607 0H25.4876L30.2877 30.651C24.3947 15.1697 11.2209 7.50356 0 10.5104V22.2127C10.3422 20.0321 25.056 23.4588 28.7198 34.958C25.056 46.457 10.3422 49.8839 0 47.7033V59.4054C11.2209 62.4123 24.4071 54.7599 30.2877 39.265L25.4876 69.916H39.2607L34.4637 39.265C40.3567 54.7462 53.5336 62.4123 64.7514 59.4054V47.7033C54.4123 49.8839 39.6953 46.457 36.0316 34.958C39.6953 23.4588 54.4123 20.0321 64.7514 22.2127Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function ActionLeadingIcon({ item }: { item: ActionItem }) {
  if ("variant" in item && item.variant === "book-scan") {
    return <BookScanIcon />;
  }
  if ("variant" in item && item.variant === "aeon-round") {
    return <AskAeonRoundIcon />;
  }
  const { icon: Icon, iconWrap, iconClass } = item as LucideAction;
  if (iconWrap) {
    return (
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconWrap}`}
        aria-hidden
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
    );
  }
  return (
    <Icon
      className={`h-9 w-9 shrink-0 ${iconClass ?? ""}`}
      strokeWidth={1.5}
      aria-hidden
    />
  );
}

export function QuickActions() {
  return (
    <section className="mx-4 mt-6">
      <h2 className="text-xl font-semibold text-zinc-950">
        Quick Actions
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {actions.map((item) => (
          <button
            key={item.title}
            type="button"
            className="flex flex-col items-start gap-3 rounded-[2rem] bg-[#FDF9EB] p-6 text-left shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition hover:shadow-[0_3px_12px_rgba(0,0,0,0.045)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
          >
            <ActionLeadingIcon item={item} />
            <div className="min-w-0">
              <p className="font-bold leading-snug text-zinc-950">{item.title}</p>
              <p className="mt-1 text-[13px] font-medium leading-snug text-zinc-500">
                {item.subtitle}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
