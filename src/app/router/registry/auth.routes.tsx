import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { AuthLayout } from "../layouts";
import { paths } from "../path";
import type { RouteHandle } from "../route-handle";

const LoginPage = lazy(() => import("@/features/auth/pages/Login"));

const AuthCallbackPage = lazy(
  () => import("@/features/auth/pages/AuthCallback"),
);

export const authRoutes: RouteObject = {
  id: "auth",
  element: <AuthLayout />,
  handle: {
    title: "Authentication",
    hidden: true,
  } satisfies RouteHandle,
  children: [
    {
      id: "auth.login",
      path: paths.auth.login,
      element: <LoginPage />,
      handle: {
        title: "Login",
        label: "Login",
        breadcrumb: "Login",
        guestOnly: true,
        hidden: true,
        showInNavbar: false,
        showInSidebar: false,
      } satisfies RouteHandle,
    },
    {
      id: "auth.callback",
      path: paths.auth.callback,
      element: <AuthCallbackPage />,
      handle: {
        title: "Authentication",
        label: "Authentication",
        breadcrumb: "Authentication",
        guestOnly: true,
        hidden: true,
        showInNavbar: false,
        showInSidebar: false,
      } satisfies RouteHandle,
    },
  ],
};
