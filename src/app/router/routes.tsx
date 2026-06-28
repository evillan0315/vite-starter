import type { RouteObject } from "react-router-dom";

import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";

import RootLayout from "./layouts/RootLayout";

import { ErrorPage, NotFound } from "./pages";
import { paths } from "./path";

import {
  authRoutes,
  dashboardRoutes,
  publicRoutes,
} from "./registry";

export const routes: RouteObject[] = [
  {
    id: "root",
    path: paths.home,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      ...publicRoutes,

      {
        element: <GuestGuard />,
        children: [
          {
            path: paths.auth.root,
            ...authRoutes,
          },
        ],
      },

      {
        element: <AuthGuard />,
        children: [
          {
            path: paths.dashboard.root,
            ...dashboardRoutes,
          },
        ],
      },

      {
        path: "*",
        element: <NotFound />,
        handle: {
          title: "Page Not Found",
        },
      },
    ],
  },
];