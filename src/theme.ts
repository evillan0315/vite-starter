import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a Material UI theme instance.
// You can customize colors, typography, spacing, and more here.
let theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Blue
    },
    secondary: {
      main: '#f50057', // Pink
    },
    background: {
      default: '#f4f6f8', // Light gray background
      paper: '#ffffff', // White paper background
    },
    text: {
      primary: '#333333', // Dark text
      secondary: '#666666', // Medium gray text
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h1: { fontSize: '3rem' },
    h2: { fontSize: '2.5rem' },
    h3: { fontSize: '2rem' },
    // ... other typography settings
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: 'outlined',
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
