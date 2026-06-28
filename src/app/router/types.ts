// app/router/types.ts

import type { RouteObject } from "react-router-dom";
import type { RouteHandle } from "./route-handle";

export type AppRoute = Omit<RouteObject, "handle" | "children"> & {
  handle?: RouteHandle;
  children?: AppRoute[];
};