import { BottomNav } from "@/components/dashboard/bottom-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full bg-[#ECE8D8] text-zinc-900">
      <div className="mx-auto min-h-full w-full max-w-md shadow-[0_0_28px_rgba(0,0,0,0.028)]">
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
