/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_FRONTEND_PORT: string;
  readonly VITE_USE_MOCK_AUTH: boolean;
  // Removed VITE_APP_JWT_TOKEN as it's no longer used for mocking
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
