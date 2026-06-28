import type { JSX } from "react";

import { Outlet } from "react-router-dom";

import { Sidebar } from "@/widgets/sidebar/Sidebar";

export function DashboardLayout(): JSX.Element {
  return (
    <div className="flex min-h-dvh ">
      {/* Sidebar */}
      <aside className="hidden shrink-0  lg:block">
        <Sidebar />
      </aside>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col">


        {/* Page */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-7xl p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
