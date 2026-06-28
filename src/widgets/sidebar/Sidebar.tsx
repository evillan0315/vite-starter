import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
} from "@mui/material";

import { NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import FolderIcon from "@mui/icons-material/Folder";

const drawerWidth = 260;

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    label: "Files",
    path: "/dashboard/files",
    icon: <FolderIcon />,
  },
  {
    label: "Users",
    path: "/admin/users",
    icon: <PeopleIcon />,
    adminOnly: true,
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
    icon: <SettingsIcon />,
  },
];

export const Sidebar = () => {
  const isAdmin = true; // replace with useAuth().user?.role

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid #e5e7eb",
        },
      }}
    >
      <Toolbar />

      <div className="px-3 py-4">
        <List className="space-y-1">
          {menuItems
            .filter((item) => !item.adminOnly || isAdmin)
            .map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "no-underline",
                    "block",
                    isActive ? "bg-gray-200" : "hover:bg-gray-100",
                  ].join(" ")
                }
              >
                <ListItemButton className="rounded-lg">
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </NavLink>
            ))}
        </List>

        <Divider className="my-3" />
      </div>
    </Drawer>
  );
};
