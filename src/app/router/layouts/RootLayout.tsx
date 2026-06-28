import type { JSX } from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "@/widgets/navbar/Navbar";

export default function RootLayout(): JSX.Element {
  return (
    <div className="flex min-h-dvh flex-col bg-background-default text-text-primary">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
