import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/features/auth/hooks/useAuth";

import Loading from "@/shared/ui/Loading";

import { paths } from "../path";

const GuestGuard: React.FC = () => {
  const { isLoggedIn, loading } = useAuth();

  /**
   * Wait until authentication has been initialized.
   */
  if (loading) {
    return (
      <Loading
        type="gradient"
        fullscreen
        message="Loading..."
      />
    );
  }

  /**
   * Authenticated users should not access guest-only pages.
   */
  if (isLoggedIn) {
    return (
      <Navigate
        to={paths.dashboard.root}
        replace
      />
    );
  }

  return <Outlet />;
};

export default GuestGuard;