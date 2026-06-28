import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";

import {
  fetchUserProfile,
  logoutUser,
  authStore,
} from "@/features/auth/model/authStore";

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const error = searchParams.get("error");
  const token = searchParams.get("accessToken");

  useEffect(() => {
    const handleCallback = async () => {
      try {
        if (error) {
          navigate(`/login?error=${encodeURIComponent(error)}`, {
            replace: true,
          });
          return;
        }

        if (!token) {
          navigate("/login", { replace: true });
          return;
        }

        // 1. Set token-only auth state
        authStore.set({
          isLoggedIn: true,
          token,
          user: null,
          loading: true,
          error: null,
        });

        // 2. Fetch user profile via store action
        await fetchUserProfile();

        // 3. Final navigation
        navigate("/dashboard", { replace: true });
      } catch (err) {
        await logoutUser();

        navigate(
          `/login?error=${encodeURIComponent(
            (err as Error).message || "Authentication failed"
          )}`,
          { replace: true }
        );
      }
    };

    handleCallback();
  }, [token, error, navigate]);

  const state = authStore.get();

  return (
    <Box className="flex flex-col items-center justify-center min-h-[50vh]">
      {state.error ? (
        <Alert severity="error">
          Authentication failed: {state.error}
        </Alert>
      ) : (
        <>
          <CircularProgress />
          <Typography className="mt-2 text-gray-500">
            Completing authentication...
          </Typography>
        </>
      )}
    </Box>
  );
};
export default AuthCallback;