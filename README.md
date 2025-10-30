# Gemini TTS Frontend Application

This is the frontend application for the Gemini Text-to-Speech (TTS) service, built with React, TypeScript, and Vite. It provides a user interface for authentication, managing user profiles, and interacting with the backend TTS and WebSocket services.

## ✨ Features

-   **React 19 & TypeScript:** Modern frontend development with strong typing.
-   **Vite 5:** Fast development server and build tooling.
-   **Material UI v6:** Comprehensive and customizable UI components for a polished look.
-   **Tailwind CSS v4:** Utility-first CSS for flexible and responsive styling.
-   **Nanostores:** Lightweight and efficient state management.
-   **React Router DOM v6:** Declarative routing for navigation.
-   **Authentication:** Secure user login via email/password, Google OAuth, and GitHub OAuth.
-   **Socket.IO Client:** Real-time communication with the backend WebSocket service.

## 🚀 Getting Started

### Prerequisites

-   Node.js (LTS version recommended)
-   npm, yarn, or pnpm package manager
-   A running backend API for authentication and TTS services.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd vite-starter
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

### Environment Variables

Create a `.env` file in the project root based on the `.env.example` (if provided) or the following structure. These variables are crucial for the application to connect to the backend services and handle OAuth callbacks.

```env
# Frontend server port
VITE_FRONTEND_PORT=5173

# Backend API URL (for REST API calls)
VITE_API_URL="http://localhost:3000/api"

# Backend WebSocket URL
VITE_WS_URL="ws://localhost:3000"

# Full URL of the backend application
VITE_BACKEND_URL="http://localhost:3000"

# Full URL of this frontend application
VITE_FRONTEND_URL="http://localhost:5173"

# OAuth Callback URLs (replace with your actual callback URLs registered with Google/GitHub)
# These are typically configured on the backend, but the frontend might use them for constructing auth initiation URLs.
GITHUB_CALLBACK_URL="http://localhost:3000/api/auth/github/callback"
GOOGLE_CALLBACK_URL="http://localhost:3000/api/auth/google/callback"

# Node.js environment (e.g., development, production)
NODE_ENV=development
```

**Note:** The `VITE_FRONTEND_PORT` is used by Vite's development server, and `cli_port` parameter in OAuth redirects helps the backend know where to redirect after authentication.

### Development

To start the development server:

```bash
npm run dev
# or yarn dev
# or pnpm dev
```

This will open the application in your browser (usually `http://localhost:5173`, configurable via `VITE_FRONTEND_PORT`). Vite is configured to proxy `/api` and `/socket.io` requests to the `VITE_API_URL` and `VITE_WS_URL` respectively, handled by the backend server.

### Building for Production

To build the application for production:

```bash
npm run build
# or yarn build
# or pnpm build
```

This command compiles the TypeScript code and bundles the assets into the `dist` directory.

### Linting and Formatting

-   Run ESLint to check for code quality issues:
    ```bash
    npm run lint
    ```
-   Format code with Prettier:
    ```bash
    npm run format
    ```

## 🔐 Authentication

The application uses a JWT-based authentication system:

-   **Login Page (`LoginPage.tsx`):** Users can log in using email/password or via OAuth with Google and GitHub.
-   **Auth Callback (`AuthCallback.tsx`):** Handles redirects from OAuth providers, extracts the JWT token, and fetches the user profile.
-   **`useAuth` Hook:** Provides a convenient interface for authentication state (`isLoggedIn`, `user`, `loading`, `error`) and actions (`login`, `logout`).
-   **Nanostores (`authStore.ts`):** Manages the global authentication state, persists the JWT token to `localStorage`, and handles fetching user profiles.
-   **`authService.ts`:** Communicates with the backend authentication API endpoints (`/api/auth/login`, `/api/auth/logout`, `/api/auth/me`).

## 🎨 Styling

This project combines Material UI for rich components and Tailwind CSS for utility-first styling. Material UI components are customized using the `theme.ts` file and the `sx` prop, while Tailwind classes are applied directly in JSX for layout and responsive design.