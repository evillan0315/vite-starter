import type { RouteObject } from "react-router-dom";

import { HomePage } from "../pages";
import type { RouteHandle } from "../route-handle";

export const publicRoutes: RouteObject[] = [
  {
    id: "home",
    index: true,
    element: <HomePage />,
    handle: {
      title: "Home",
      breadcrumb: "Home",
    } satisfies RouteHandle,
  },
];
