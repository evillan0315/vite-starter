import type { JSX } from "react";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
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
import ThemeToggle from "@/shared/ui/ThemeToggle";

export function Navbar(): JSX.Element {
  const navigate = useNavigate();

  const { user, isLoggedIn, logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
  ): void => {
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
    navigate(
      `${paths.dashboard.root}/${paths.dashboard.profile}`,
    );
  };

  const handleLogout = async (): Promise<void> => {
    handleMenuClose();

    await logout();

    navigate(`${paths.auth.root}/${paths.auth.login}`, {
      replace: true,
    });
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        backdropFilter: "blur(18px)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: 56,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap={1}
        >
          <Tooltip title="Menu">
            <IconButton edge="start">
              <MenuIcon />
            </IconButton>
          </Tooltip>

          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            Vite Starter
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={1}
        >
          <ThemeToggle />

          {!isLoggedIn ? (
            <Button
              variant="contained"
              startIcon={<LoginIcon />}
              onClick={handleLogin}
            >
              Login
            </Button>
          ) : (
            <>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                {user?.firstName ??
                  user?.email ??
                  "Authenticated User"}
              </Typography>

              <Tooltip title="Account">
                <IconButton
                  onClick={handleMenuOpen}
                  aria-controls={
                    open ? "account-menu" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={open}
                >
                  <Avatar
                    sx={{
                      width: 36,
                      height: 36,
                    }}
                  >
                    <AccountCircleIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>

              <Menu
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleDashboard}>
                  <DashboardIcon
                    fontSize="small"
                    sx={{ mr: 1 }}
                  />
                  Dashboard
                </MenuItem>

                <MenuItem onClick={handleProfile}>
                  <PersonIcon
                    fontSize="small"
                    sx={{ mr: 1 }}
                  />
                  Profile
                </MenuItem>

                <MenuItem onClick={handleLogout}>
                  <LogoutIcon
                    fontSize="small"
                    sx={{ mr: 1 }}
                  />
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;