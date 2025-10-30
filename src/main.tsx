import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme';
import { initAuth } from '@/components/auth/stores/authStore';
import './index.css';
import App from './App.tsx';

// Initialize authentication state on app load
initAuth();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Provides a consistent baseline for styling */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
