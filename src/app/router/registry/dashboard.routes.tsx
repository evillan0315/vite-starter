import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { DashboardLayout } from "../layouts";
import { paths } from "../path";
import type { RouteHandle } from "../route-handle";

const DashboardPage = lazy(
  () => import("@/features/dashboard/pages/Dashboard"),
);

const ProfilePage = lazy(
  () => import("@/features/profile/pages/Profile"),
);

export const dashboardRoutes: RouteObject = {
  id: "dashboard",
  element: <DashboardLayout />,
  handle: {
    title: "Dashboard",
    requiresAuth: true,
  } satisfies RouteHandle,
  children: [
    {
      id: "dashboard.home",
      index: true,
      element: <DashboardPage />,
      handle: {
        title: "Dashboard",
        label: "Dashboard",
        breadcrumb: "Dashboard",
        icon: <DashboardOutlinedIcon />,
        requiresAuth: true,
        showInSidebar: true,
        showInNavbar: false,
        order: 1,
      } satisfies RouteHandle,
    },
    {
      id: "dashboard.profile",
      path: paths.dashboard.profile,
      element: <ProfilePage />,
      handle: {
        title: "Profile",
        label: "Profile",
        breadcrumb: "Profile",
        icon: <PersonOutlineOutlinedIcon />,
        requiresAuth: true,
        showInSidebar: true,
        showInNavbar: true,
        order: 2,
      } satisfies RouteHandle,
    },
  ],
};