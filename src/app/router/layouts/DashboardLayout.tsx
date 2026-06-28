import type { JSX } from "react";

import { Outlet } from "react-router-dom";

import { Navbar } from "@/widgets/navbar/Navbar";
import { Sidebar } from "@/widgets/sidebar/Sidebar";

export function DashboardLayout(): JSX.Element {
  return (
    <div className="flex min-h-dvh bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden shrink-0 border-r border-gray-200 bg-white lg:block">
        <Sidebar />
      </aside>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur">
          <Navbar />
        </header>

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
