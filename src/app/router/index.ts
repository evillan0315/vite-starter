import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { routes } from "./routes";
export const router = createBrowserRouter(routes satisfies RouteObject[]);
