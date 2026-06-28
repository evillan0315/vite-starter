# Vite Starter

![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-6-007FFF?logo=mui&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

A modern frontend starter template built with **React 19**, **TypeScript**, and
**Vite 7**.

It provides a scalable foundation for production applications featuring authentication,
theming, real-time readiness,and modular architecture.

---

## Why this starter

This project is designed for production systems, not demos.

It enforces:

- Feature-based modular architecture
- Strict TypeScript boundaries
- Service-layer API abstraction
- UI and state separation using Nanostores
- Scalable real-time integration support

---

## Features

### Core

- ⚛️ React 19
- ⚡ Vite 7
- 📘 TypeScript 5.9

### UI & Styling

- 🎨 Material UI 6
- 💨 Tailwind CSS 4
- 🎭 Theme system (dark/light mode)

### Backend Integration

- 🔐 JWT authentication ready
- 🔑 OAuth support (Google, GitHub)
- 🌐 Axios HTTP client

### Real-time

- 🔄 Socket.IO integration
- 📡 Event-driven updates

### Dev Experience

- 🧪 ESLint 9 flat config
- ✨ Prettier 3
- ⚙️ Vite React plugin

---

## Architecture

- 🧱 Modular feature-based structure
- 🧠 Nanostores state management
- 🔌 Service layer abstraction (API + WS + Auth)

Flow:

UI Layer → Feature Modules → State Layer → Service Layer → Backend → Infrastructure

## Technology Stack

| Layer            | Technology         |
| :--------------- | :----------------- |
| UI               | React 19           |
| Language         | TypeScript 5.9     |
| Build Tool       | Vite 7             |
| UI Library       | Material UI 6      |
| Styling          | Tailwind CSS 4     |
| State Management | Nanostores         |
| Routing          | React Router DOM 6 |
| HTTP Client      | Axios              |
| Realtime         | Socket.IO Client   |
| Linting          | ESLint 9           |
| Formatting       | Prettier 3         |

---

## Project Structure

```text
.
├── README.md
├── architecture.svg
├── eslint.config.js
├── index.html
├── kubernetes
│   └── websocket-pod.yaml
├── package-lock.json
├── package.json
├── public
│   ├── favicon.svg
│   ├── site.webmanifest
│   └── vite.svg
├── scripts
│   ├── README.md
│   ├── createApp.sh
│   └── createAppWithTemplate.sh
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── auth
│   │   │   ├── AuthCallback.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── api
│   │   │   │   └── authService.ts
│   │   │   ├── hooks
│   │   │   │   └── useAuth.ts
│   │   │   ├── stores
│   │   │   │   └── authStore.ts
│   │   │   └── types
│   │   │       └── auth.ts
│   │   └── ui
│   │       └── Loading.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── theme
│   │   └── index.ts
│   ├── theme.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Installation

```bash
git clone git@github.com:evillan0315/starter.git
cd starter
npm install
```

Or:

```bash
pnpm install
```

---

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Type-check + build
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run format     # Run Prettier
```

---

## Environment Variables

```env
VITE_FRONTEND_URL=http://localhost:5173
VITE_API_URL=http://localhost:3000/api
VITE_BACKEND_URL=http://localhost:3000
VITE_WS_URL=ws://localhost:3000

GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback
GITHUB_CALLBACK_URL=http://localhost:3000/api/auth/github/callback

NODE_ENV=development
```

---

## Authentication System

Located in:

```bash
src/components/auth/
```

Supports:

- Email/password login
- OAuth callbacks (Google, GitHub)
- JWT authentication flow
- Persistent session state
- Protected routes

---

## Theme System

Located in:

```bash
src/theme/
```

- Dark / Light mode switching
- Persistent theme state
- Material UI + Tailwind integration
- Centralized theme configuration

---

## Real-Time Layer

- Live updates
- Notifications
- Chat systems
- Event streaming

Powered by Socket.IO via:

```bash
VITE_WS_URL
```

---

## Kubernetes Deployment

Used for:

- WebSocket scaling
- Containerized deployments
- DevOps integration

---

## Code Quality

- ESLint 9 Flat Config
- Prettier 3
- Tailwind class sorting plugin
- Strict TypeScript mode

Recommended extensions:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Error Lens
- GitLens

---

## Repository

```bash
git@github.com:evillan0315/starter.git
```

---

## License

MIT

---

## Author

Eddie Villanueva

- Email: [evillan0315@gmail.com](mailto:evillan0315@gmail.com)
- GitHub: [https://github.com/evillan0315](https://github.com/evillan0315)
- LinkedIn: [https://www.linkedin.com/in/eddie-villalon/](https://www.linkedin.com/in/eddie-villalon/)

---
