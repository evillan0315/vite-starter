import { Outlet } from "react-router-dom";

import { Sidebar } from "@/widgets/sidebar/Sidebar";

export const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="shrink-0">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1 min-w-0">
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};