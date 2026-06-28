import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";

/**
 * Lazy-loaded route components
 * (kept isolated from JSX to maintain pure config file)
 */
const Home = lazy(() => import("@/App"));
const Login = lazy(() => import("@/features/auth/pages/Login"));
const Callback = lazy(() => import("@/features/auth/pages/AuthCallback"));

/**
 * Pure route configuration
 * NO JSX, NO components, NO helpers
 */
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "auth/login",
        element: <Login />,
      },
      {
        path: "auth/callback",
        element: <Callback />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];