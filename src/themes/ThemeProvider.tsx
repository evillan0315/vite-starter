// src/theme/ThemeProvider.tsx

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

import {
  ThemeProvider as MuiThemeProvider,
  type PaletteMode,
} from "@mui/material/styles";

import { CssBaseline } from "@mui/material";

import { createAppTheme } from "./createTheme";
import { ThemeContext } from "./ThemeContext";

const STORAGE_KEY = "theme-mode";

const getSystemTheme = (): PaletteMode => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getInitialTheme = (): PaletteMode => {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return getSystemTheme();
};

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>(getInitialTheme);

  /**
   * Persist theme selection.
   */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  /**
   * Automatically follow the operating system theme
   * until the user explicitly chooses a theme.
   */
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const listener = (event: MediaQueryListEvent) => {
      const stored = localStorage.getItem(STORAGE_KEY);

      // User already selected a theme.
      if (stored === "light" || stored === "dark") {
        return;
      }

      setMode(event.matches ? "dark" : "light");
    };

    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, []);

  const toggleColorMode = useCallback(() => {
    setMode((previousMode) =>
      previousMode === "light" ? "dark" : "light",
    );
  }, []);

  const setColorMode = useCallback((newMode: PaletteMode) => {
    setMode(newMode);
  }, []);

  const theme = useMemo(
    () => createAppTheme(mode),
    [mode],
  );

  const contextValue = useMemo(
    () => ({
      mode,
      isDark: mode === "dark",
      toggleColorMode,
      setColorMode,
    }),
    [mode, toggleColorMode, setColorMode],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;