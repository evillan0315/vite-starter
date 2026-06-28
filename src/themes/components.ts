// src/theme/components.ts

import type { Components, Theme } from "@mui/material/styles";

import { gradients, shadows } from "./colors";

export const getComponentOverrides = (
  theme: Theme,
): Components<Omit<Theme, "components">> => ({
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        scrollBehavior: "smooth",
      },

      body: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        fontFeatureSettings: '"liga" 1',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },

      "*": {
        boxSizing: "border-box",
      },

      "*::-webkit-scrollbar": {
        width: 10,
        height: 10,
      },

      "*::-webkit-scrollbar-track": {
        background: theme.palette.background.paper,
      },

      "*::-webkit-scrollbar-thumb": {
        background: theme.palette.divider,
        borderRadius: 999,
      },

      "*::-webkit-scrollbar-thumb:hover": {
        background: theme.palette.primary.main,
      },

      "::selection": {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },

      a: {
        color: "inherit",
        textDecoration: "none",
      },

      img: {
        maxWidth: "100%",
        display: "block",
      },
    },
  },

  MuiAppBar: {
    defaultProps: {
      elevation: 0,
      color: "transparent",
    },

    styleOverrides: {
      root: {
        backgroundColor: theme.palette.mode === "dark"
          ? theme.palette.secondary.dark
          : theme.palette.background.paper,

        color: theme.palette.text.primary,

        backdropFilter: "blur(18px)",

        WebkitBackdropFilter: "blur(18px)",

        borderBottom: `1px solid ${theme.palette.divider}`,

        boxShadow: "none",
      },
    },
  },

  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: 56,
        paddingLeft: 24,
        paddingRight: 24,

        "@media (min-width:600px)": {
          minHeight: 56,
          paddingLeft: 32,
          paddingRight: 32,
        },
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: "contained",
    },

    styleOverrides: {
      root: {
        minHeight: 42,

        borderRadius: 12,

        padding: "10px 24px",

        fontWeight: 600,

        fontSize: "0.95rem",

        letterSpacing: 0.2,

        textTransform: "none",

        transition: "all .25s ease",

        "&:active": {
          transform: "scale(.98)",
        },
      },

      contained: {
        color: "#1A1208",

        background: gradients.primary,

        boxShadow: `${shadows.gold}, inset 0 1px 1px rgba(255,255,255,.15)`,

        "&:hover": {
          background: gradients.primaryHover,

          boxShadow: `${shadows.goldHover}, inset 0 1px 1px rgba(255,255,255,.20)`,

          filter: "brightness(1.05)",

          transform: "translateY(-1px)",
        },

        "&:focus-visible": {
          outline: `2px solid ${theme.palette.primary.light}`,
          outlineOffset: 2,
        },

        "&:disabled": {
          color: "#7A705F",

          background:
            theme.palette.mode === "dark"
              ? "#40362A"
              : "#D7C5A9",

          boxShadow: "none",
        },
      },

      containedPrimary: {
        color: "#1A1208",
      },

      containedSecondary: {
        background: theme.palette.secondary.main,

        color: "#FFFFFF",

        "&:hover": {
          background: theme.palette.secondary.light,
        },
      },

      outlined: {
        color: theme.palette.primary.light,

        borderWidth: 1.5,

        borderColor: theme.palette.primary.dark,

        backgroundColor: "transparent",

        "&:hover": {
          borderColor: theme.palette.primary.light,

          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(184,143,92,.08)"
              : "rgba(184,143,92,.05)",
        },
      },

      text: {
        color: theme.palette.primary.light,

        "&:hover": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(184,143,92,.08)"
              : "rgba(184,143,92,.05)",
        },
      },

      sizeSmall: {
        minHeight: 34,
        padding: "6px 14px",
      },

      sizeMedium: {
        minHeight: 42,
      },

      sizeLarge: {
        minHeight: 48,
        padding: "12px 30px",
      },
    },
  },
    MuiPaper: {
    defaultProps: {
      elevation: 0,
    },

    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.paper,

        border: `1px solid ${theme.palette.divider}`,

        borderRadius: theme.shape.borderRadius * 1.5,

        boxShadow: shadows.paper,

        backgroundImage: "none",
      },
    },
  },

  MuiCard: {
    defaultProps: {
      elevation: 0,
    },

    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.paper,

        border: `1px solid ${theme.palette.divider}`,

        borderRadius: theme.shape.borderRadius * 1.5,

        boxShadow: shadows.card,

        backgroundImage: "none",

        overflow: "hidden",
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      variant: "outlined",
      size: "medium",
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 10,

        backgroundColor:
          theme.palette.mode === "dark"
            ? "#141414"
            : theme.palette.background.paper,

        transition: "all .2s ease",

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.divider,
        },

        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main,
        },

        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main,
          borderWidth: 2,
        },

        "&.Mui-error .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.error.main,
        },

        "&.Mui-disabled": {
          opacity: 0.7,
        },
      },

      input: {
        color: theme.palette.text.primary,

        "&::placeholder": {
          color: theme.palette.text.secondary,
          opacity: 1,
        },
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: theme.palette.text.secondary,

        "&.Mui-focused": {
          color: theme.palette.primary.main,
        },

        "&.Mui-error": {
          color: theme.palette.error.main,
        },
      },
    },
  },

  MuiChip: {
    defaultProps: {
      size: "small",
    },

    styleOverrides: {
      root: {
        height: 30,

        borderRadius: 999,

        fontWeight: 500,
      },

      filledPrimary: {
        color: "#1A1208",

        background: gradients.primary,
      },

      outlined: {
        color: theme.palette.primary.light,

        borderColor: theme.palette.primary.dark,

        "&:hover": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(184,143,92,.08)"
              : "rgba(184,143,92,.05)",
        },
      },
    },
  },

  MuiAvatar: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.primary.main,

        color: theme.palette.primary.contrastText,

        fontWeight: 600,
      },
    },
  },

  MuiBadge: {
    styleOverrides: {
      badge: {
        backgroundColor: theme.palette.primary.main,

        color: theme.palette.primary.contrastText,

        fontWeight: 600,
      },
    },
  },
    MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: theme.palette.divider,
      },
    },
  },

  MuiLink: {
    defaultProps: {
      underline: "hover",
    },

    styleOverrides: {
      root: {
        color: theme.palette.primary.main,

        fontWeight: 500,

        transition: "color .2s ease",

        "&:hover": {
          color: theme.palette.primary.light,
        },
      },
    },
  },

  MuiIconButton: {
    defaultProps: {
      color: "inherit",
    },

    styleOverrides: {
      root: {
        borderRadius: 10,

        transition: "all .2s ease",

        color: theme.palette.text.secondary,

        "&:hover": {
          color: theme.palette.primary.main,

          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(184,143,92,.08)"
              : "rgba(184,143,92,.05)",
        },
      },
    },
  },

  MuiList: {
    styleOverrides: {
      root: {
        paddingTop: 4,
        paddingBottom: 4,
      },
    },
  },

  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,

        marginBottom: 2,

        transition: "all .2s ease",

        "&:hover": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(184,143,92,.08)"
              : "rgba(184,143,92,.05)",
        },

        "&.Mui-selected": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(184,143,92,.14)"
              : "rgba(184,143,92,.10)",

          color: theme.palette.primary.main,

          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(184,143,92,.18)"
                : "rgba(184,143,92,.14)",
          },
        },
      },
    },
  },

  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: theme.palette.background.paper,

        color: theme.palette.text.primary,

        border: `1px solid ${theme.palette.divider}`,

        boxShadow: shadows.paper,

        fontSize: "0.8rem",
      },

      arrow: {
        color: theme.palette.background.paper,
      },
    },
  },

  MuiMenu: {
    defaultProps: {
      elevation: 0,
    },

    styleOverrides: {
      paper: {
        backgroundColor: theme.palette.background.paper,

        border: `1px solid ${theme.palette.divider}`,

        borderRadius: 12,

        boxShadow: shadows.paper,

        marginTop: 6,

        minWidth: 180,

        backgroundImage: "none",
      },

      list: {
        paddingTop: 6,
        paddingBottom: 6,
      },
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: 8,

        margin: "2px 6px",

        transition: "all .2s ease",

        "&:hover": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(184,143,92,.08)"
              : "rgba(184,143,92,.05)",
        },

        "&.Mui-selected": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(184,143,92,.14)"
              : "rgba(184,143,92,.10)",

          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(184,143,92,.18)"
                : "rgba(184,143,92,.14)",
          },
        },
      },
    },
  },

  MuiDialog: {
    defaultProps: {
      PaperProps: {
        elevation: 0,
      },
    },

    styleOverrides: {
      paper: {
        borderRadius: 16,

        backgroundColor: theme.palette.background.paper,

        border: `1px solid ${theme.palette.divider}`,

        boxShadow: shadows.paper,

        backgroundImage: "none",
      },
    },
  },

  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: theme.palette.background.paper,

        borderRight: `1px solid ${theme.palette.divider}`,

        backgroundImage: "none",
      },
    },
  },

  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
    },
  },

  MuiAlert: {
    defaultProps: {
      variant: "filled",
    },

    styleOverrides: {
      root: {
        borderRadius: 12,

        fontWeight: 500,
      },
    },
  },

  MuiAccordion: {
    defaultProps: {
      disableGutters: true,
      elevation: 0,
    },

    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.paper,

        border: `1px solid ${theme.palette.divider}`,

        borderRadius: 12,

        overflow: "hidden",

        "&::before": {
          display: "none",
        },

        "&.Mui-expanded": {
          margin: 0,
        },
      },
    },
  },

  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        minHeight: 52,

        "&.Mui-expanded": {
          minHeight: 52,
        },
      },

      content: {
        "&.Mui-expanded": {
          margin: "12px 0",
        },
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      indicator: {
        height: 3,

        borderRadius: 999,

        background: gradients.primary,
      },
    },
  },

  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none",

        fontWeight: 600,

        minHeight: 48,

        "&.Mui-selected": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
});