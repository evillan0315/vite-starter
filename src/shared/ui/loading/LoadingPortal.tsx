import React from "react";
import { createPortal } from "react-dom";
import { useStore } from "@nanostores/react";

import Loading from "@/shared/ui/Loading";
import { $loading } from "@/shared/state/loading.store";

const portalRoot = document.getElementById("loading-portal");

export const LoadingPortal: React.FC = () => {
  const loading = useStore($loading);

  if (!portalRoot || !loading.active) return null;

  return createPortal(
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <Loading
        type={loading.type}
        message={loading.message}
      />
    </div>,
    portalRoot
  );
};