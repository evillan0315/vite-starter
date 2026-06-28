// src/app/App.tsx

import { RouterProvider } from "react-router-dom";

import { router } from "@/app/router";
import { AppProviders } from "@/app/providers/AppProviders";
import { ThemeProvider } from "@/themes/ThemeProvider";

export function App() {
  return (
    <ThemeProvider>
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>
    </ThemeProvider>
  );
}

export default App;