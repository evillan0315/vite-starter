import type { JSX } from "react";

import { Outlet } from "react-router-dom";

import { Box, Container, Paper, Stack, Typography } from "@mui/material";

import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

export function AuthLayout(): JSX.Element {
  return (
    <Box className="relative flex min-h-dvh overflow-hidden bg-background-default">
      {/* Background decoration */}
      <Box className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />
      </Box>

      <Container
        maxWidth="lg"
        className="flex flex-1 items-center justify-center py-10"
      >
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={6}
          alignItems="center"
          className="w-full"
        >
          {/* Branding */}
          <Box className="hidden flex-1 md:block">
            <Stack spacing={3}>
              <RocketLaunchOutlinedIcon color="primary" sx={{ fontSize: 72 }} />

              <Typography variant="h2" fontWeight={700}>
                Vite Starter
              </Typography>

              <Typography variant="h5" color="text.secondary">
                A production-ready React starter featuring authentication,
                routing, layouts, state management, theming, and scalable
                architecture.
              </Typography>
            </Stack>
          </Box>

          {/* Auth Content */}
          <Box className="flex w-full max-w-lg flex-1 justify-center">
            <Paper elevation={8} className="w-full rounded-3xl p-8">
              <Outlet />
            </Paper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default AuthLayout;
