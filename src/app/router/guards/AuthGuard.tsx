import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";

export const AuthGuard = () => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) return null; // or a loader

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
