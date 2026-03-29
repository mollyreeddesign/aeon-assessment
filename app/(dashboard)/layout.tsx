import { BottomNav } from "@/components/dashboard/bottom-nav";
import { HealthGoalsProgressProvider } from "@/components/dashboard/health-goals-progress-context";
import { MetabolismPinnedProvider } from "@/components/dashboard/metabolism/metabolism-pinned-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MetabolismPinnedProvider>
      <HealthGoalsProgressProvider>
        <div className="min-h-full bg-[#ECE8D8] text-zinc-900">
          <div className="mx-auto min-h-full w-full max-w-md shadow-[0_0_28px_rgba(0,0,0,0.028)]">
            {children}
          </div>
          <BottomNav />
        </div>
      </HealthGoalsProgressProvider>
    </MetabolismPinnedProvider>
  );
}
