import React from "react";
import { LoadingPortal } from "@/shared/ui/loading/LoadingPortal";

export const AppProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      {children}
      <LoadingPortal />
    </>
  );
};