import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      light: "#E6C27A",
      main: "#B88F5C",
      dark: "#8A642F",
      contrastText: "#1A1208",
    },

    secondary: {
      light: "#383838",
      main: "#1A1A1A",
      dark: "#040404",
      contrastText: "#FFFFFF",
    },

    success: {
      main: "#4CAF50",
    },

    warning: {
      main: "#F5C542",
    },

    error: {
      main: "#E53935",
    },

    info: {
      main: "#64B5F6",
    },

    background: {
      default: "#060606",
      paper: "#101010",
    },

    text: {
      primary: "#F5F2EC",
      secondary: "#C8B79B",
    },

    divider: "#2A2219",
  },

  shape: {
    borderRadius: 8,
  },

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
      color: "#F5F2EC",
    },

    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#F5F2EC",
    },

    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      color: "#F5F2EC",
    },

    h4: {
      fontWeight: 600,
      color: "#F5F2EC",
    },

    h5: {
      fontWeight: 600,
      color: "#F5F2EC",
    },

    h6: {
      fontWeight: 600,
      color: "#F5F2EC",
    },

    subtitle1: {
      color: "#C8B79B",
    },

    subtitle2: {
      color: "#C8B79B",
    },

    body1: {
      color: "#F5F2EC",
    },

    body2: {
      color: "#C8B79B",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: 0.2,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },

        body: {
          backgroundColor: "#060606",
          color: "#F5F2EC",
          fontFeatureSettings: '"liga" 1',
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },

        "*": {
          boxSizing: "border-box",
        },

        a: {
          color: "inherit",
          textDecoration: "none",
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
          backgroundColor: "#040404",
          color: "#F5F2EC",
          borderBottom: "1px solid rgba(184,143,92,.18)",
          boxShadow: "none",
          backdropFilter: "blur(16px)",
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
      },

      styleOverrides: {
        root: {
          minHeight: 42,
          borderRadius: 12,
          padding: "10px 24px",
          fontWeight: 600,
          fontSize: "0.95rem",
          transition: "all .2s ease-in-out",

          "&:active": {
            transform: "scale(.98)",
          },
        },

        contained: {
          color: "#1A1208",

          background:
            "linear-gradient(90deg,#B88F5C 0%,#E6C27A 45%,#C9A15E 70%,#8A642F 100%)",

          boxShadow:
            "0 0 20px rgba(184,143,92,.20), inset 0 1px 1px rgba(255,255,255,.15)",

          "&:hover": {
            background:
              "linear-gradient(90deg,#C49B66 0%,#F0CF88 45%,#D4AB69 70%,#99723B 100%)",

            boxShadow:
              "0 8px 28px rgba(230,194,122,.30), inset 0 1px 1px rgba(255,255,255,.2)",

            filter: "brightness(1.06)",
          },

          "&:disabled": {
            color: "#6D604F",
            background: "#40362A",
            boxShadow: "none",
          },
        },

        outlined: {
          color: "#E6C27A",
          borderColor: "#8A642F",

          "&:hover": {
            borderColor: "#E6C27A",
            backgroundColor: "rgba(184,143,92,.08)",
          },
        },

        text: {
          color: "#E6C27A",

          "&:hover": {
            backgroundColor: "rgba(184,143,92,.08)",
          },
        },
      },
    },

    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundColor: "#101010",
          border: "1px solid rgba(184,143,92,.10)",
          borderRadius: 12,
          boxShadow: "0 12px 40px rgba(0,0,0,.45)",
        },
      },
    },

    MuiCard: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundColor: "#101010",
          border: "1px solid rgba(184,143,92,.10)",
          borderRadius: 12,
          boxShadow: "0 12px 40px rgba(0,0,0,.45)",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#141414",
          borderRadius: 10,

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2A2219",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8A642F",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#B88F5C",
            borderWidth: 2,
          },
        },

        input: {
          color: "#F5F2EC",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          height: 30,
          borderRadius: 999,
          fontWeight: 500,
        },

        filledPrimary: {
          color: "#1A1208",
          background:
            "linear-gradient(90deg,#B88F5C,#E6C27A,#8A642F)",
        },

        outlined: {
          borderColor: "#8A642F",
          color: "#E6C27A",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#2A2219",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: "#E6C27A",
          transition: "color .2s ease",

          "&:hover": {
            color: "#F2D596",
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#E6C27A",

          "&:hover": {
            backgroundColor: "rgba(184,143,92,.08)",
          },
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#101010",
          border: "1px solid rgba(184,143,92,.10)",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(184,143,92,.08)",
          },

          "&.Mui-selected": {
            backgroundColor: "rgba(184,143,92,.12)",

            "&:hover": {
              backgroundColor: "rgba(184,143,92,.18)",
            },
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;