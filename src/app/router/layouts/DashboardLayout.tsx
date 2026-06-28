import { Outlet } from "react-router-dom";
import { Navbar } from "@/widgets/navbar/Navbar";
import { Sidebar } from "@/widgets/sidebar/Sidebar";

export const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="p-6 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
