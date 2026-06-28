import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { RouterProvider } from "react-router-dom";

import "@/index.css";

import { bootstrap } from "@/app/bootstrap";
import { AppProviders } from "@/app/providers/AppProviders";
import { router } from "@/app/router";

import Loading from "@/shared/ui/Loading";

import theme from "@/themes/theme";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element '#root' was not found.");
}

try {
  await bootstrap();

  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AppProviders>
          <Suspense
            fallback={
              <Loading
                type="gradient"
                fullscreen
                message="Initializing application..."
              />
            }
          >
            <RouterProvider router={router} />
          </Suspense>
        </AppProviders>
      </ThemeProvider>
    </StrictMode>,
  );
} catch (error) {
  console.error("Application bootstrap failed:", error);

  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Loading
          type="gradient"
          fullscreen
          message="Failed to initialize application."
        />
      </ThemeProvider>
    </StrictMode>,
  );
}