import type { JSX } from "react";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { paths } from "@/app/router/path";

const API_URL = import.meta.env.VITE_API_URL;

const oauthRedirect = (provider: "google" | "github"): void => {
  window.location.href = `${API_URL}/auth/${provider}`;
};

export default function Login(): JSX.Element {
  const navigate = useNavigate();

  const { login, loading, error, isLoggedIn } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate(paths.dashboard.root, {
        replace: true,
      });
    }
  }, [isLoggedIn, navigate]);

  const canSubmit = useMemo(
    () => form.email.trim().length > 0 && form.password.length > 0 && !loading,
    [form, loading],
  );

  const handleChange =
    (field: keyof typeof form) => (event: ChangeEvent<HTMLInputElement>) => {
      setForm((previous) => ({
        ...previous,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!canSubmit) return;

      await login({
        email: form.email.trim(),
        password: form.password,
      });
    },
    [canSubmit, form, login],
  );

  return (
    <Box className="flex min-h-screen items-center justify-center px-6 py-12">
      <Paper elevation={6} className="w-full max-w-md rounded-3xl p-8">
        <Stack spacing={4}>
          {/* Header */}

          <Stack spacing={2} alignItems="center">
            <RocketLaunchOutlinedIcon color="primary" sx={{ fontSize: 60 }} />

            <Typography variant="h4" fontWeight={700}>
              Welcome Back
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Sign in to continue to your application.
            </Typography>
          </Stack>

          {error && <Alert severity="error">{error}</Alert>}

          {/* Login Form */}

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Email Address"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange("email")}
                disabled={loading}
                fullWidth
              />

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange("password")}
                disabled={loading}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword((value) => !value)}
                      >
                        {showPassword ? (
                          <VisibilityOffOutlinedIcon />
                        ) : (
                          <VisibilityOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={!canSubmit}
                startIcon={
                  loading ? (
                    <CircularProgress size={18} color="inherit" />
                  ) : undefined
                }
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </Stack>
          </Box>

          <Divider>OR</Divider>

          {/* OAuth */}

          <Stack spacing={2}>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              disabled={loading}
              onClick={() => oauthRedirect("google")}
            >
              Continue with Google
            </Button>

            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              disabled={loading}
              onClick={() => oauthRedirect("github")}
            >
              Continue with GitHub
            </Button>
          </Stack>

          <Typography variant="body2" color="text.secondary" textAlign="center">
            Don't have an account?{" "}
            <Link component={RouterLink} to="/register" underline="hover">
              Create one
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
