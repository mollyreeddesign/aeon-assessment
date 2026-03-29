import type { LucideIcon } from "lucide-react";
import { FileText, LineChart } from "lucide-react";

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
    title: "Ask AI about your Results",
    subtitle: "24/7 Support",
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="49"
        height="48"
        viewBox="0 0 49 48"
        fill="none"
        className="h-7 w-7 text-black"
      >
        <path
          d="M42.4013 11.1333L37.2013 5.93325C36.8013 5.53325 36.3346 5.33325 35.8013 5.33325H12.868C12.3346 5.33325 11.8013 5.53325 11.468 5.93325L6.26797 11.1333C5.86797 11.5333 5.66797 11.9999 5.66797 12.5333V41.9999C5.66797 42.3999 5.93464 42.6666 6.33464 42.6666C6.73464 42.6666 7.0013 42.3999 7.0013 41.9999V12.5333C7.0013 12.3333 7.06797 12.1999 7.2013 12.0666L12.4013 6.86659C12.5346 6.73325 12.668 6.66659 12.868 6.66659H35.7346C35.9346 6.66659 36.068 6.73325 36.2013 6.86659L41.4013 12.0666C41.5346 12.1999 41.6013 12.3333 41.6013 12.5333V41.9999C41.6013 42.3999 41.868 42.6666 42.268 42.6666C42.668 42.6666 42.9346 42.3999 42.9346 41.9999V12.5333C43.0013 11.9999 42.8013 11.5333 42.4013 11.1333Z"
          fill="currentColor"
        />
        <path
          d="M24.3346 16.3333C20.1346 16.3333 16.668 19.7999 16.668 23.9999C16.668 24.3999 16.9346 24.6666 17.3346 24.6666C17.7346 24.6666 18.0013 24.3999 18.0013 23.9999C18.0013 20.5333 20.868 17.6666 24.3346 17.6666C27.8013 17.6666 30.668 20.5333 30.668 23.9999C30.668 24.3999 30.9346 24.6666 31.3346 24.6666C31.7346 24.6666 32.0013 24.3999 32.0013 23.9999C32.0013 19.7999 28.5346 16.3333 24.3346 16.3333Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.066 35.6002L28.5327 24.8668C28.3993 24.0002 27.5327 23.3335 26.5327 23.3335H22.1993C21.1993 23.3335 20.3327 24.0002 20.1993 24.8668L18.666 35.6002V35.6668V35.7335V38.0002C18.666 39.1335 19.5327 40.0002 20.666 40.0002H28.066C29.1993 40.0002 30.066 39.1335 30.066 38.0002V35.6668V35.6002ZM21.5324 25.0001C21.5324 24.8001 21.8658 24.6001 22.1991 24.6001H26.5324C26.8658 24.6001 27.1991 24.8001 27.1991 25.0001L28.5991 35.0001H20.0658L21.5324 25.0001ZM28.066 38.6668C28.466 38.6668 28.7327 38.4002 28.7327 38.0002V36.3335H19.9993V38.0002C19.9993 38.4002 20.266 38.6668 20.666 38.6668H28.066Z"
          fill="currentColor"
        />
        <path
          d="M24.2682 11.2666C17.2682 11.2666 11.6016 16.9333 11.6016 23.9333C11.6016 24.6666 11.6682 25.3333 11.8016 26.0666C11.8682 26.3999 12.2016 26.6666 12.6016 26.5999C12.9349 26.5333 13.2016 26.1999 13.1349 25.7999C13.0016 25.1999 13.0016 24.5333 13.0016 23.9333C13.0016 17.6666 18.0682 12.5999 24.3349 12.5999C30.6016 12.5999 35.6682 17.6666 35.6682 23.9333C35.6682 24.5999 35.6016 25.1999 35.5349 25.8666C35.4682 26.1999 35.7349 26.5999 36.0682 26.6666C36.1349 26.6666 36.1349 26.6666 36.2016 26.6666C36.5349 26.6666 36.8016 26.4666 36.8682 26.1333C37.0016 25.4666 37.0682 24.7333 37.0682 23.9999C36.9349 16.9333 31.2682 11.2666 24.2682 11.2666Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4012 11.3333C14.0678 11.3333 14.6012 11.8666 14.6012 12.5333C14.6012 13.1333 14.0678 13.6666 13.4012 13.7333C12.7345 13.7333 12.2012 13.1999 12.2012 12.5333C12.2012 11.8666 12.7345 11.3333 13.4012 11.3333ZM34.6009 12.5333C34.6009 11.8667 35.1342 11.3333 35.8009 11.3333C36.4676 11.3333 37.0009 11.8667 37.0009 12.5333C37.0009 13.2 36.4676 13.7333 35.8009 13.7333C35.1342 13.7333 34.6009 13.2 34.6009 12.5333Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function AskAeonRoundIcon() {
  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgb(253,168,123)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
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
            className="flex flex-col items-start gap-3 rounded-[2rem] bg-white p-6 text-left shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
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
