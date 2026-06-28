import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useState } from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";

export const Navbar = () => {
  const { user, logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleMenuClose();
    await logout();
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      className="bg-white text-gray-900 border-b border-gray-200"
    >
      <Toolbar className="flex justify-between">
        {/* Left */}
        <Box className="flex items-center gap-2">
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className="font-semibold">
            Dashboard
          </Typography>
        </Box>

        {/* Right */}
        <Box className="flex items-center gap-3">
          <Typography variant="body2" className="text-gray-600">
            {user?.email ?? "Guest"}
          </Typography>

          <IconButton onClick={handleMenuOpen}>
            <Avatar className="w-8 h-8">
              <AccountCircleIcon />
            </Avatar>
          </IconButton>

          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem onClick={handleLogout}>
              <LogoutIcon fontSize="small" className="mr-2" />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
