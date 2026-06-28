import type { JSX } from "react";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  Dashboard,
  Folder,
  People,
  Settings,
} from "@mui/icons-material";

import { useMemo } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { paths } from "@/app/router/path";

const drawerWidth = 260;

interface SidebarItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  permissions?: string[];
}

export function Sidebar(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth();

  const menuItems = useMemo<SidebarItem[]>(
    () => [
      {
        label: "Dashboard",
        path: paths.dashboard.root,
        icon: <Dashboard />,
      },
      {
        label: "Files",
        path: `${paths.dashboard.root}/files`,
        icon: <Folder />,
      },
      {
        label: "Users",
        path: "/admin/users",
        icon: <People />,
        permissions: ["admin"],
      },
      {
        label: "Settings",
        path: `${paths.dashboard.root}/settings`,
        icon: <Settings />,
      },
    ],
    [],
  );

  // TODO:
  // const permissions = user?.permissions ?? [];

  const visibleItems = menuItems.filter((item) => {
    if (!item.permissions) {
      return true;
    }

    return true;

    // Future:
    // return item.permissions.every(permission =>
    //   permissions.includes(permission),
    // );
  });

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: 1,
          borderColor: "divider",
        },
      }}
    >
      <Toolbar />

      <Box className="flex h-full flex-col">
        <Box className="flex items-center gap-3 border-b border-gray-200 px-5 py-6">
          <Avatar>
            {user?.firstName?.[0] ??
              user?.email?.[0]?.toUpperCase() ??
              "U"}
          </Avatar>

          <Box>
            <Typography fontWeight={600}>
              {user?.firstName ?? "User"}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {user?.email}
            </Typography>
          </Box>
        </Box>

        <List className="flex-1 space-y-1 p-3">
          {visibleItems.map((item) => {
            const active =
              location.pathname === item.path ||
              location.pathname.startsWith(
                `${item.path}/`,
              );

            return (
              <ListItemButton
                key={item.path}
                selected={active}
                onClick={() => navigate(item.path)}
                className="rounded-lg"
              >
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText primary={item.label} />
              </ListItemButton>
            );
          })}
        </List>

        <Divider />

        <Box className="px-5 py-4">
          <Typography
            variant="caption"
            color="text.secondary"
          >
            Vite Starter
          </Typography>

          <Typography variant="body2">
            React 19 • Vite 7
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}

export default Sidebar;