import type { Metadata } from "next";

import { SubpageHeader } from "@/components/dashboard/subpage-header";

export const metadata: Metadata = {
  title: "Domains — Daily",
};

export default function DomainsPage() {
  return (
    <div className="pb-28">
      <SubpageHeader
        title="Domains"
        subtitle="Explore health areas that matter to you."
      />
      <div className="px-4 pt-2">
        <div className="rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <h2 className="font-serif text-lg font-semibold text-zinc-900">
            Cancer
          </h2>
          <button
            type="button"
            className="mt-4 w-full rounded-full bg-[#200201] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#2a0808] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
          >
            Open
          </button>
        </div>
      </div>
    </div>
  );
}
