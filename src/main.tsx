import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/index.css";

import { bootstrap } from "@/app/bootstrap";
import App from "@/app/App";

await bootstrap();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
