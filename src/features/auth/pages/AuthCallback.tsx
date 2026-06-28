import type { JSX } from "react";
import { useEffect, useState } from "react";

import { Alert, Box, Button, Paper, Stack, Typography } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { useNavigate, useSearchParams } from "react-router-dom";

import { paths } from "@/app/router/path";
import {
  authStore,
  fetchUserProfile,
  logoutUser,
} from "@/features/auth/model/authStore";
import Loading from "@/shared/ui/Loading";

export default function AuthCallback(): JSX.Element {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [callbackError, setCallbackError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const authenticate = async (): Promise<void> => {
      const error = searchParams.get("error");
      const accessToken = searchParams.get("accessToken");

      try {
        if (error) {
          navigate(
            `${paths.auth.root}/${paths.auth.login}?error=${encodeURIComponent(
              error,
            )}`,
            {
              replace: true,
            },
          );

          return;
        }

        if (!accessToken) {
          navigate(`${paths.auth.root}/${paths.auth.login}`, {
            replace: true,
          });

          return;
        }

        authStore.set({
          isLoggedIn: true,
          token: accessToken,
          user: null,
          loading: true,
          error: null,
        });

        await fetchUserProfile();

        navigate(paths.dashboard.root, {
          replace: true,
        });
      } catch (err) {
        await logoutUser();

        if (!mounted) return;

        const message =
          err instanceof Error ? err.message : "Authentication failed.";

        setCallbackError(message);
      }
    };

    void authenticate();

    return () => {
      mounted = false;
    };
  }, [navigate, searchParams]);

  if (!callbackError) {
    return (
      <Loading
        type="gradient"
        fullscreen
        message="Completing authentication..."
      />
    );
  }

  return (
    <Box className="flex min-h-screen items-center justify-center px-6">
      <Paper elevation={4} className="w-full max-w-md rounded-2xl p-8">
        <Stack spacing={3} alignItems="center">
          <Alert severity="error" sx={{ width: "100%" }}>
            {callbackError}
          </Alert>

          <Typography variant="body2" color="text.secondary" textAlign="center">
            Your authentication could not be completed. Please try signing in
            again.
          </Typography>

          <Button
            variant="contained"
            startIcon={<HomeOutlinedIcon />}
            onClick={() =>
              navigate(`${paths.auth.root}/${paths.auth.login}`, {
                replace: true,
              })
            }
          >
            Back to Login
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
