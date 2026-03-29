import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export function MriResultsAlert() {
  return (
    <div
      className="mx-4 mt-5 flex gap-3 rounded-2xl bg-[#f4c3c6] px-4 py-3.5"
      role="alert"
    >
      <AlertTriangle
        className="mt-0.5 h-5 w-5 shrink-0 text-rose-950/85"
        strokeWidth={2}
        aria-hidden
      />
      <p className="min-w-0 flex-1 text-sm font-semibold leading-snug text-rose-950">
        One or more of your MRI results requires attention.{" "}
        <Link
          href="#"
          className="font-semibold text-rose-900 underline decoration-rose-900/60 underline-offset-2 transition hover:text-rose-950 hover:decoration-rose-950 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-900"
        >
          Review
        </Link>
      </p>
    </div>
  );
}
