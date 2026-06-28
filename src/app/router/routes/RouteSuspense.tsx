import { Suspense } from "react";
import Loading from "@/shared/ui/Loading";

export const Loader = () => (
  <Loading type="gradient" fullscreen />
);

export const RouteSuspense: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};