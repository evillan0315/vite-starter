// src/theme/colors.ts

import type { PaletteMode } from "@mui/material";

/**
 * ------------------------------------------------------------------
 * Brand Colors
 * ------------------------------------------------------------------
 */

export const brand = {
  gold: {
    50: "#FFF8E8",
    100: "#F8E8C2",
    200: "#F1D79B",
    300: "#E6C27A",
    400: "#D4AB69",
    500: "#C99A5A",
    600: "#B88F5C",
    700: "#A97845",
    800: "#8A642F",
    900: "#5E431F",
  },

  black: {
    50: "#383838",
    100: "#2A2A2A",
    200: "#202020",
    300: "#1A1A1A",
    400: "#141414",
    500: "#101010",
    600: "#0D0D0D",
    700: "#080808",
    800: "#060606",
    900: "#040404",
  },

  white: "#F5F2EC",

  ivory: "#FDFBF7",

  bronze: "#C9A15E",
} as const;

/**
 * ------------------------------------------------------------------
 * Shared Colors
 * ------------------------------------------------------------------
 */

export const common = {
  success: "#4CAF50",
  warning: "#F5C542",
  error: "#E53935",
  info: "#64B5F6",
} as const;

/**
 * ------------------------------------------------------------------
 * Gradients
 * ------------------------------------------------------------------
 */

export const gradients = {
  primary:
    "linear-gradient(90deg,#B88F5C 0%,#E6C27A 45%,#C9A15E 70%,#8A642F 100%)",

  primaryHover:
    "linear-gradient(90deg,#C49B66 0%,#F0CF88 45%,#D4AB69 70%,#99723B 100%)",

  gold: "linear-gradient(135deg,#FFF8E8 0%,#E6C27A 35%,#B88F5C 65%,#8A642F 100%)",

  dark: "linear-gradient(180deg,#141414 0%,#060606 100%)",
} as const;

/**
 * ------------------------------------------------------------------
 * Shadows
 * ------------------------------------------------------------------
 */

export const shadows = {
  gold: "0 0 20px rgba(184,143,92,.20)",

  goldHover: "0 8px 28px rgba(230,194,122,.30)",

  paper: "0 12px 40px rgba(0,0,0,.45)",

  card: "0 12px 40px rgba(0,0,0,.45)",

  appBar: "0 2px 12px rgba(0,0,0,.25)",
} as const;

/**
 * ------------------------------------------------------------------
 * Light Palette
 * ------------------------------------------------------------------
 */

export const lightPalette = {
  mode: "light" as PaletteMode,

  primary: {
    light: brand.gold[300],
    main: brand.gold[600],
    dark: brand.gold[800],
    contrastText: "#1A1208",
  },

  secondary: {
    light: brand.black[100],
    main: brand.black[300],
    dark: brand.black[900],
    contrastText: "#FFFFFF",
  },

  success: {
    main: common.success,
  },

  warning: {
    main: common.warning,
  },

  error: {
    main: common.error,
  },

  info: {
    main: common.info,
  },

  background: {
    default: brand.ivory,
    paper: "#FFFFFF",
  },

  text: {
    primary: "#1A1A1A",
    secondary: "#666666",
  },

  divider: "#E5DDD2",
} as const;

/**
 * ------------------------------------------------------------------
 * Dark Palette
 * ------------------------------------------------------------------
 */

export const darkPalette = {
  mode: "dark" as PaletteMode,

  primary: {
    light: brand.gold[300],
    main: brand.gold[600],
    dark: brand.gold[800],
    contrastText: "#1A1208",
  },

  secondary: {
    light: brand.black[50],
    main: brand.black[300],
    dark: brand.black[900],
    contrastText: "#FFFFFF",
  },

  success: {
    main: common.success,
  },

  warning: {
    main: common.warning,
  },

  error: {
    main: common.error,
  },

  info: {
    main: common.info,
  },

  background: {
    default: brand.black[800],
    paper: brand.black[500],
  },

  text: {
    primary: brand.white,
    secondary: "#C8B79B",
  },

  divider: "#2A2219",
} as const;

/**
 * ------------------------------------------------------------------
 * Theme Palette Selector
 * ------------------------------------------------------------------
 */

export const palettes = {
  light: lightPalette,
  dark: darkPalette,
} as const;
