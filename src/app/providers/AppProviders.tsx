import type { PropsWithChildren, JSX } from "react";

import { LoadingPortal } from "@/shared/ui/loading/LoadingPortal";

export function AppProviders({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <>
      {children}

      <LoadingPortal />
    </>
  );
}

export default AppProviders;