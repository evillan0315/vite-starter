import { JSX } from "react";
import { Navigate } from 'react-router-dom';

export function AuthGuard({ children }: { children: JSX.Element }) {
  const isAuth = true;
  return isAuth ? children : <Navigate to="/login" replace />;
}
