import { Outlet } from "react-router-dom";

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 relative">
      <Outlet />
    </div>
  );
};