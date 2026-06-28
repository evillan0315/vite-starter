import type { JSX } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

import { paths } from "../path";

export  function ErrorPage(): JSX.Element {
  const error = useRouteError();
  const navigate = useNavigate();

  let status = 500;
  let title = "Unexpected Error";
  let message =
    "Something went wrong while loading this page.";

  if (isRouteErrorResponse(error)) {
    status = error.status;
    title = error.statusText;
    message =
      typeof error.data === "string"
        ? error.data
        : message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <Container maxWidth="sm">
      <Box className="flex min-h-dvh items-center justify-center py-12">
        <Paper
          elevation={3}
          className="w-full rounded-2xl p-10 text-center"
        >
          <Stack
            spacing={3}
            alignItems="center"
          >
            <ErrorOutlineIcon
              color="error"
              sx={{ fontSize: 72 }}
            />

            <Typography
              variant="h2"
              fontWeight={700}
            >
              {status}
            </Typography>

            <Typography variant="h5">
              {title}
            </Typography>

            <Typography
              color="text.secondary"
              maxWidth={420}
            >
              {message}
            </Typography>

            {import.meta.env.DEV &&
              error instanceof Error && (
                <Alert
                  severity="error"
                  sx={{
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  {error.stack ?? error.message}
                </Alert>
              )}

            <Stack
              direction="row"
              spacing={2}
            >
              <Button
                variant="contained"
                startIcon={<HomeOutlinedIcon />}
                onClick={() => navigate(paths.home)}
              >
                Go Home
              </Button>

              <Button
                variant="outlined"
                startIcon={<RefreshOutlinedIcon />}
                onClick={() => window.location.reload()}
              >
                Reload
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}