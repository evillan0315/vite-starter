import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "@/features/auth/hooks/useAuth";

import Loading from "@/shared/ui/Loading";

import { paths } from "../path";

const AuthGuard: React.FC = () => {
  const { isLoggedIn, loading } = useAuth();
  const location = useLocation();

  /**
   * Wait until the authentication state has been initialized.
   */
  if (loading) {
    return (
      <Loading
        type="gradient"
        fullscreen
        message="Authenticating..."
      />
    );
  }

  /**
   * Redirect unauthenticated users to the login page while preserving
   * the originally requested location.
   */
  if (!isLoggedIn) {
    return (
      <Navigate
        to={`${paths.auth.root}/${paths.auth.login}`}
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  return <Outlet />;
};

export default AuthGuard;