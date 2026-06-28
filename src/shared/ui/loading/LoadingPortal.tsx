import React, { JSX } from "react";
import { createPortal } from "react-dom";
import { useStore } from "@nanostores/react";

import { $loading } from "@/shared/state/loading.store";
import Loading from "@/shared/ui/Loading";

export function LoadingPortal(): JSX.Element | null {
  const loading = useStore($loading);

  if (!loading.active) {
    return null;
  }

  const portalRoot = document.getElementById("loading-portal");

  if (!portalRoot) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-2000 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <Loading
        type={loading.type}
        message={loading.message}
      />
    </div>,
    portalRoot,
  );
}

export default LoadingPortal;