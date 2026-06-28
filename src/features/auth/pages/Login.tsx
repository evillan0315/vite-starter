import { useCallback, useEffect, useState, type FormEvent } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Alert,
  Paper,
  Link,
  Stack,
} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import { useAuth } from "@/features/auth/hooks/useAuth";

const API_URL = import.meta.env.VITE_API_URL;

const oauthRedirect = (provider: "google" | "github") => {
  window.location.href = `${API_URL}/auth/${provider}`;
};

const textFieldSx = {
  mb: 2,
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "primary.light" },
    "&:hover fieldset": { borderColor: "primary.main" },
    "&.Mui-focused fieldset": { borderColor: "primary.dark" },
  },
  "& .MuiInputLabel-root": { color: "text.secondary" },
  "& .MuiInputBase-input": { color: "text.primary" },
};
const Login = () => {
  const navigate = useNavigate();

  const { login, loading, error, isLoggedIn } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleChange =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!form.email || !form.password) return;

      await login({
        email: form.email,
        password: form.password,
      });
    },
    [form, login],
  );

  const handleGoogleLogin = useCallback(() => {
    oauthRedirect("google");
  }, []);

  const handleGitHubLogin = useCallback(() => {
    oauthRedirect("github");
  }, []);

  return (
    <Box className="flex flex-col items-center justify-center p-6 max-w-md mx-auto min-h-[calc(100vh-128px)]">
      {/* Header */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ mb: 4, color: "primary.main" }}
      >
        <RocketLaunchIcon sx={{ fontSize: 60 }} />
        <Typography variant="h3" className="font-extrabold">
          Vite Starter
        </Typography>
      </Stack>

      {/* Login Card */}
      <Paper
        sx={{
          p: 4,
          mb: 3,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.paper",
        }}
      >
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            fullWidth
            required
            disabled={loading}
            sx={textFieldSx}
          />

          <TextField
            label="Password"
            type="password"
            value={form.password}
            onChange={handleChange("password")}
            fullWidth
            required
            disabled={loading}
            sx={textFieldSx}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            startIcon={
              loading ? <CircularProgress size={20} color="inherit" /> : null
            }
            className="py-3 text-lg font-bold"
            sx={{ mt: 2, mb: 3 }}
          >
            Login
          </Button>
        </form>

        {/* OAuth */}
        <Box className="flex flex-col gap-2">
          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            Continue with Google
          </Button>

          <Button
            variant="outlined"
            fullWidth
            startIcon={<GitHubIcon />}
            onClick={handleGitHubLogin}
            disabled={loading}
          >
            Continue with GitHub
          </Button>
        </Box>

        {/* Register */}
        <Typography
          variant="body2"
          sx={{ mt: 3, textAlign: "center", color: "text.secondary" }}
        >
          Don’t have an account?{" "}
          <Link
            component={RouterLink}
            to="/register"
            sx={{
              textDecoration: "none",
              color: "primary.main",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Register
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};
export default Login;