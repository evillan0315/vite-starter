// src/theme/createTheme.ts

import {
  createTheme,
  responsiveFontSizes,
  type PaletteMode,
} from "@mui/material/styles";

import { palettes } from "./colors";
import { getComponentOverrides } from "./components";

export const createAppTheme = (mode: PaletteMode) => {
  let theme = createTheme({
    palette: palettes[mode],

    shape: {
      borderRadius: 8,
    },

    spacing: 8,

    typography: {
      fontFamily: [
        "Inter",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),

      h1: {
        fontWeight: 700,
        fontSize: "3rem",
      },

      h2: {
        fontWeight: 700,
        fontSize: "2.5rem",
      },

      h3: {
        fontWeight: 600,
        fontSize: "2rem",
      },

      h4: {
        fontWeight: 600,
      },

      h5: {
        fontWeight: 600,
      },

      h6: {
        fontWeight: 600,
      },

      subtitle1: {
        fontWeight: 500,
      },

      subtitle2: {
        fontWeight: 500,
      },

      body1: {
        lineHeight: 1.7,
      },

      body2: {
        lineHeight: 1.6,
      },

      button: {
        fontWeight: 600,
        textTransform: "none",
        letterSpacing: 0.2,
      },

      caption: {
        fontSize: "0.75rem",
      },

      overline: {
        letterSpacing: 1.2,
        textTransform: "uppercase",
      },
    },
  });

  theme = createTheme(theme, {
    components: getComponentOverrides(theme),
  });

  theme = responsiveFontSizes(theme);

  return theme;
};

export default createAppTheme;
