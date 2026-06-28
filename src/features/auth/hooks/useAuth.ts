import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@nanostores/react";

import {
  authStore,
  fetchUserProfile,
  loginUser,
  logoutUser,
} from "@/features/auth/model/authStore";

import type { LoginCredentials } from "@/features/auth/types/auth";

import { paths } from "@/app/router/path";

export const useAuth = () => {
  const navigate = useNavigate();

  const state = useStore(authStore);

  const {
    isLoggedIn,
    token,
    user,
    loading,
  } = state;

  /**
   * Hydrate the authenticated user.
   */
  useEffect(() => {
    if (isLoggedIn && token && !user && !loading) {
      void fetchUserProfile();
    }
  }, [isLoggedIn, token, user, loading]);

  /**
   * Login
   */
  const login = useCallback(
    async (credentials: LoginCredentials) => {
      return loginUser(credentials);
    },
    [],
  );

  /**
   * Logout
   */
  const logout = useCallback(async () => {
    await logoutUser();

    navigate(paths.auth.root, {
      replace: true,
    });
  }, [navigate]);

  /**
   * Refresh the authenticated user's profile.
   */
  const refreshProfile = useCallback(async () => {
    await fetchUserProfile();
  }, []);

  /**
   * Convenience navigation helpers.
   */
  const goToDashboard = useCallback(() => {
    navigate(paths.dashboard.root, {
      replace: true,
    });
  }, [navigate]);

  const goToLogin = useCallback(() => {
    navigate(paths.auth.root, {
      replace: true,
    });
  }, [navigate]);

  return {
    ...state,

    login,
    logout,

    refreshProfile,

    goToDashboard,
    goToLogin,
  };
};