import SideBar from "@/components/shared/sideBar/SideBar";
import TopBar from "@/components/shared/TopBar/TopBar";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
// Import the new sidebar component

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <DashboardLayoutContent>{children}</DashboardLayoutContent>;
}

function DashboardLayoutContent({ children }: { children: ReactNode }) {
  const t = useTranslations();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col h-screen">
        <TopBar />
        <main className="min-h-screen overflow-y-auto flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
