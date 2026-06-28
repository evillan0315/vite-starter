import type { JSX } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOffOutlinedIcon from "@mui/icons-material/SearchOffOutlined";

import { Link as RouterLink } from "react-router-dom";

import { paths } from "../path";

export function NotFound(): JSX.Element {
  return (
    <Container maxWidth="sm">
      <Box className="flex min-h-dvh items-center justify-center py-12">
        <Paper elevation={3} className="w-full rounded-2xl p-10 text-center">
          <Stack spacing={3} alignItems="center">
            <SearchOffOutlinedIcon color="primary" sx={{ fontSize: 72 }} />

            <Typography variant="h1" fontWeight={700}>
              404
            </Typography>

            <Typography variant="h5">Page Not Found</Typography>

            <Typography color="text.secondary" maxWidth={420}>
              The page you're looking for doesn't exist, may have been moved, or
              the URL may be incorrect.
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
            >
              <Button
                component={RouterLink}
                to={paths.home}
                variant="contained"
                startIcon={<HomeOutlinedIcon />}
              >
                Go Home
              </Button>

              <Button
                variant="outlined"
                startIcon={<ArrowBackOutlinedIcon />}
                onClick={() => window.history.back()}
              >
                Go Back
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}
