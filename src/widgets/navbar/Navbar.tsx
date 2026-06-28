import type { JSX } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { paths } from "@/app/router/path";

export function Navbar(): JSX.Element {
  const navigate = useNavigate();

  const { user, isLoggedIn, logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  const handleLogin = (): void => {
    navigate(`${paths.auth.root}/${paths.auth.login}`);
  };

  const handleDashboard = (): void => {
    handleMenuClose();
    navigate(paths.dashboard.root);
  };

  const handleProfile = (): void => {
    handleMenuClose();
    navigate(`${paths.dashboard.root}/${paths.dashboard.profile}`);
  };

  const handleLogout = async (): Promise<void> => {
    handleMenuClose();

    await logout();

    navigate(`${paths.auth.root}/${paths.auth.login}`, {
      replace: true,
    });
  };

  return (
    <AppBar position="sticky" elevation={1} color="inherit">
      <Toolbar className="flex justify-between">
        <Box className="flex items-center gap-2">
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className="font-semibold">
            Vite Starter
          </Typography>
        </Box>

        {!isLoggedIn ? (
          <Button
            variant="contained"
            startIcon={<LoginIcon />}
            onClick={handleLogin}
          >
            Login
          </Button>
        ) : (
          <Box className="flex items-center gap-3">
            <Typography variant="body2" color="text.secondary">
              {user?.firstName ?? user?.email ?? "Authenticated User"}
            </Typography>

            <IconButton onClick={handleMenuOpen}>
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>

            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              <MenuItem onClick={handleDashboard}>
                <DashboardIcon fontSize="small" className="mr-2" />
                Dashboard
              </MenuItem>

              <MenuItem onClick={handleProfile}>
                <PersonIcon fontSize="small" className="mr-2" />
                Profile
              </MenuItem>

              <MenuItem onClick={handleLogout}>
                <LogoutIcon fontSize="small" className="mr-2" />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
