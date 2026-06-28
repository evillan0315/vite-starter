// app/router/path.ts

const AUTH_ROOT = "/auth";
const DASHBOARD_ROOT = "/dashboard";

export const paths = {
  home: "/",

  auth: {
    root: AUTH_ROOT,

    login: "login",
    callback: "callback",

    loginPath: `${AUTH_ROOT}/login`,
    callbackPath: `${AUTH_ROOT}/callback`,
  },

  dashboard: {
    root: DASHBOARD_ROOT,

    index: "",
    profile: "profile",
    settings: "settings",
    users: "users",
    roles: "roles",

    profilePath: `${DASHBOARD_ROOT}/profile`,
    settingsPath: `${DASHBOARD_ROOT}/settings`,
    usersPath: `${DASHBOARD_ROOT}/users`,
    rolesPath: `${DASHBOARD_ROOT}/roles`,
  },
} as const;

export type AppPaths = typeof paths;