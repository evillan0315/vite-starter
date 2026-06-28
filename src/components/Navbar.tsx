import React, { useCallback } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Button,
  Chip,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useAuth } from "@/components/auth/hooks/useAuth";

interface NavButtonProps {
  to?: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ to, icon, label, onClick }) => (
  <Button
    color="inherit"
    startIcon={icon}
    component={to ? RouterLink : "button"}
    to={to}
    onClick={onClick}
    sx={{
      borderRadius: 2,
      px: 2,
      fontWeight: 500,
    }}
  >
    {label}
  </Button>
);

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();

  const handleLogout = useCallback(async () => {
    await logout();
    navigate("/login", { replace: true });
  }, [logout, navigate]);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 52,
          px: 2,
          py: 0,
          justifyContent: "space-between",

          "@media (min-width:600px)": {
            minHeight: 52,
          },
        }}
      >
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

        <Stack direction="row" spacing={1} alignItems="center">
          {isLoggedIn ? (
            <>
              <NavButton to="/" icon={<HomeIcon />} label="Home" />

              <Chip
                icon={<AccountCircleIcon />}
                label={user?.email ?? "Profile"}
                color="primary"
                variant="outlined"
                sx={{
                  fontWeight: 500,
                }}
              />

              <NavButton
                icon={<LogoutIcon />}
                label="Logout"
                onClick={handleLogout}
              />
            </>
          ) : (
            <NavButton to="/login" icon={<LoginIcon />} label="Login" />
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
