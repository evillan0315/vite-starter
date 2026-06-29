// src/shared/ui/ThemeToggle.tsx

import type { JSX } from "react";

import { IconButton, Tooltip, Zoom } from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useTheme } from "@mui/material/styles";

import { useThemeMode } from "@/themes";

export function ThemeToggle(): JSX.Element {
  const theme = useTheme();

  const { isDark, toggleColorMode } = useThemeMode();

  return (
    <Tooltip
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      TransitionComponent={Zoom}
      arrow
    >
      <IconButton
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
        color="inherit"
        size="medium"
        sx={{
          width: 40,
          height: 40,
          borderRadius: 2,

          color: isDark
            ? theme.palette.primary.light
            : theme.palette.primary.dark,

          backgroundColor: "transparent",

          transition: "all 200ms ease",

          "&:hover": {
            backgroundColor: theme.palette.action.hover,
            transform: "rotate(180deg)",
          },

          "&:active": {
            transform: "scale(0.95)",
          },
        }}
      >
        {isDark ? (
          <LightModeIcon
            sx={{
              fontSize: 22,
              transition: "transform .25s ease",
            }}
          />
        ) : (
          <DarkModeIcon
            sx={{
              fontSize: 22,
              transition: "transform .25s ease",
            }}
          />
        )}
      </IconButton>
    </Tooltip>
  );
}

export default ThemeToggle;
