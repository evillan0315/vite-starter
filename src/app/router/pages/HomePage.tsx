import type { JSX } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

import { Link as RouterLink } from "react-router-dom";

import { useAuth } from "@/features/auth/hooks/useAuth";

import { paths } from "../path";

export  function HomePage(): JSX.Element {
  const { isLoggedIn, user } = useAuth();

  const displayName =
    user?.firstName ??
    user?.email ??
    "Guest";

  return (
    <Box className="flex flex-1 items-center justify-center px-6 py-12">
      <Paper
        elevation={2}
        className="w-full max-w-3xl rounded-2xl p-10"
      >
        <Stack
          spacing={4}
          alignItems="center"
          textAlign="center"
        >
          <Typography
            variant="h3"
            fontWeight={700}
          >
            Vite Starter
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
          >
            {isLoggedIn
              ? `Welcome back, ${displayName}!`
              : "A modern React + TypeScript + Material UI + Tailwind CSS starter template."}
          </Typography>

          <Typography
            color="text.secondary"
            maxWidth={640}
          >
            This starter provides authentication,
            feature-based architecture, routing,
            layouts, global loading, theming,
            state management, and scalable project
            organization for production-ready
            applications.
          </Typography>

          {isLoggedIn ? (
            <Button
              component={RouterLink}
              to={paths.dashboard.root}
              variant="contained"
              size="large"
              startIcon={<DashboardOutlinedIcon />}
            >
              Go to Dashboard
            </Button>
          ) : (
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
            >
              <Button
                component={RouterLink}
                to={`${paths.auth.root}/${paths.auth.login}`}
                variant="contained"
                size="large"
                startIcon={<LoginOutlinedIcon />}
              >
                Sign In
              </Button>

              <Button
                component={RouterLink}
                to={paths.dashboard.root}
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardOutlinedIcon />}
              >
                Explore
              </Button>
            </Stack>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}