# Vite Starter

A modern frontend starter template built with **React 19**, **TypeScript**, and **Vite 7**. This project provides a clean, scalable foundation for building production-ready web applications with authentication, routing, state management, and modern UI tooling.

---

## Features

- ⚛️ React 19
- 📘 TypeScript 5
- ⚡ Vite 7
- 🎨 Material UI v6
- 💨 Tailwind CSS v4
- 🗄️ Nanostores
- 🧭 React Router DOM v6
- 🌐 Axios HTTP client
- 🔄 Socket.IO Client
- 🎯 ESLint 9 (Flat Config)
- ✨ Prettier 3
- 🎨 Tailwind CSS Prettier Plugin
- 📱 Responsive UI
- 🚀 Production-ready project structure

---

## Technology Stack

| Technology       | Version | Purpose                 |
| ---------------- | ------- | ----------------------- |
| React            | 19      | User Interface          |
| TypeScript       | 5.9     | Static typing           |
| Vite             | 7       | Build tool              |
| Material UI      | 6       | UI components           |
| Emotion          | 11      | CSS-in-JS styling       |
| Tailwind CSS     | 4       | Utility-first CSS       |
| React Router DOM | 6       | Routing                 |
| Axios            | 1.x     | HTTP client             |
| Nanostores       | 1.x     | State management        |
| Socket.IO Client | 4.x     | Real-time communication |
| ESLint           | 9       | Code linting            |
| Prettier         | 3       | Code formatting         |

---

## Requirements

- Node.js 20 or later
- npm, pnpm, or Yarn

---

## Installation

Clone the repository.

```bash
git clone git@github.com:evillan0315/starter.git
```

Navigate into the project.

```bash
cd starter
```

Install dependencies.

```bash
npm install
```

Or

```bash
pnpm install
```

Or

```bash
yarn install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
VITE_FRONTEND_PORT=5173

VITE_FRONTEND_URL=http://localhost:5173

VITE_API_URL=http://localhost:3000/api

VITE_BACKEND_URL=http://localhost:3000

VITE_WS_URL=ws://localhost:3000

GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback

GITHUB_CALLBACK_URL=http://localhost:3000/api/auth/github/callback

NODE_ENV=development
```

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```

Starts the Vite development server.

---

### Build

```bash
npm run build
```

Builds the project for production.

---

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally.

---

### Lint

```bash
npm run lint
```

Runs ESLint using the project's Flat Config configuration.

---

### Format

```bash
npm run format
```

Formats the project using Prettier and automatically sorts Tailwind CSS classes.

---

## Project Structure

```text
src/
├── assets/
├── components/
├── config/
├── constants/
├── contexts/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── stores/
├── styles/
├── themes/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

---

## Authentication

The starter is designed to work with a backend that provides JWT authentication.

Typical authentication features include:

- Email and password login
- Google OAuth
- GitHub OAuth
- JWT token storage
- Protected routes
- User profile retrieval
- Automatic session restoration

---

## Styling

The project combines Material UI and Tailwind CSS.

### Material UI

Material UI provides:

- Components
- Theming
- Icons
- Accessibility

### Tailwind CSS

Tailwind CSS is used for:

- Layout
- Responsive design
- Utility classes
- Rapid UI development

---

## State Management

Global application state is managed using **Nanostores**, providing:

- Lightweight stores
- React bindings
- High performance
- Minimal boilerplate

---

## Networking

### REST API

HTTP requests are performed using **Axios**.

### Real-Time Communication

Socket.IO Client is included for:

- Notifications
- Live updates
- Chat applications
- Presence
- Streaming events

---

## Code Quality

This project includes:

- ESLint 9
- TypeScript
- Prettier 3
- prettier-plugin-tailwindcss

Recommended VS Code extensions:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Error Lens
- GitLens
- Material Icon Theme

---

## Repository

```text
git@github.com:evillan0315/starter.git
```

---

## License

MIT License

---

## Author

**Eddie Villanueva**

Email

[evillan0315@gmail.com](mailto:evillan0315@gmail.com)

GitHub

https://github.com/evillan0315

LinkedIn

https://www.linkedin.com/in/eddie-villalon/
