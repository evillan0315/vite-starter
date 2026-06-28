import { useStore } from "@nanostores/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";

import {
  authStore,
  logoutUser,
  loginUser,
  fetchUserProfile,
} from "@/features/auth/model/authStore";

import type { LoginCredentials } from "@/features/auth/types/auth";

/**
 * Auth hook (UI-safe bridge layer)
 * - exposes state
 * - triggers auth actions
 * - avoids owning routing decisions directly
 */
export const useAuth = () => {
  const navigate = useNavigate();

  const { isLoggedIn, token, user, loading, error } = useStore(authStore);

  /**
   * Hydrate user profile when authenticated but user is missing
   */
  useEffect(() => {
    if (isLoggedIn && !user && !loading) {
      fetchUserProfile();
    }
  }, [isLoggedIn, user, loading]);

  /**
   * Login handler
   * NOTE: routing is delegated to caller (page/route layer)
   */
  const login = useCallback(async (credentials: LoginCredentials) => {
    const result = await loginUser(credentials);
    return result;
  }, []);

  /**
   * Logout handler
   * Keeps navigation as a UI concern (safe to keep here if desired)
   */
  const logout = useCallback(() => {
    logoutUser();
    navigate("/login", { replace: true });
  }, [navigate]);

  /**
   * Optional helper for post-login navigation (explicit intent)
   */
  const goToDashboard = useCallback(() => {
    navigate("/dashboard", { replace: true });
  }, [navigate]);

  return {
    isLoggedIn,
    token,
    user,
    loading,
    error,
    login,
    logout,
    goToDashboard,
  };
};
