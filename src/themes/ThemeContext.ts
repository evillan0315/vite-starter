// src/theme/ThemeContext.ts

import { createContext } from "react";
import type { PaletteMode } from "@mui/material/styles";

export interface ThemeContextValue {
  /**
   * Current palette mode.
   */
  mode: PaletteMode;

  /**
   * Convenience flag for dark mode.
   */
  isDark: boolean;

  /**
   * Toggle between light and dark mode.
   */
  toggleColorMode: () => void;

  /**
   * Explicitly set the color mode.
   */
  setColorMode: (mode: PaletteMode) => void;
}

export const ThemeContext = createContext<
  ThemeContextValue | undefined
>(undefined);

ThemeContext.displayName = "ThemeContext";