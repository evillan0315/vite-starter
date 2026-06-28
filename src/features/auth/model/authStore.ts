import { atom } from "nanostores";
import { authService } from "@/features/auth/api/authService";

import type { LoginCredentials, UserProfile } from "@/features/auth/types/auth";

/**
 * Auth state model
 */
export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
}

/**
 * Safe localStorage access (SSR-safe future proofing)
 */
const getInitialToken = (): string | null => {
  try {
    return localStorage.getItem("jwt_token");
  } catch {
    return null;
  }
};

const initialToken = getInitialToken();

/**
 * Global auth store
 */
export const authStore = atom<AuthState>({
  isLoggedIn: Boolean(initialToken),
  token: initialToken,
  user: null,
  loading: false,
  error: null,
});

/**
 * Internal helper: safe state update
 */
const updateAuth = (patch: Partial<AuthState>) => {
  const current = authStore.get();
  authStore.set({
    ...current,
    ...patch,
  });
};

/**
 * Persist token changes
 */
authStore.listen((state) => {
  try {
    if (state.token) {
      localStorage.setItem("jwt_token", state.token);
    } else {
      localStorage.removeItem("jwt_token");
    }
  } catch {
    // ignore storage errors (SSR / privacy mode safe)
  }
});

/**
 * Set auth after login / OAuth
 */
export const setAuthDetails = (token: string, user: UserProfile) => {
  authStore.set({
    isLoggedIn: true,
    token,
    user,
    loading: false,
    error: null,
  });
};

/**
 * Login flow
 */
export const loginUser = async (credentials: LoginCredentials) => {
  updateAuth({ loading: true, error: null });

  try {
    const { token, user } = await authService.login(credentials);

    setAuthDetails(token, user);

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Login failed";

    updateAuth({
      loading: false,
      error: message,
    });

    return { success: false, error: message };
  }
};

/**
 * Logout flow
 */
export const logoutUser = async () => {
  try {
    await authService.logout();
  } catch {
    // ignore backend logout failure (still clear local state)
  }

  authStore.set({
    isLoggedIn: false,
    token: null,
    user: null,
    loading: false,
    error: null,
  });
};

/**
 * Fetch current user profile
 */
export const fetchUserProfile = async () => {
  const { token, user } = authStore.get();

  if (!token || user) return;

  updateAuth({ loading: true, error: null });

  try {
    const profile = await authService.getProfile();

    updateAuth({
      user: profile,
      loading: false,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to fetch profile";

    // invalidate session on auth failure
    authStore.set({
      isLoggedIn: false,
      token: null,
      user: null,
      loading: false,
      error: message,
    });

    try {
      await authService.logout();
    } catch {
      // ignore
    }
  }
};

/**
 * Initialize auth on app bootstrap
 */
export const initAuth = async () => {
  const { isLoggedIn, token, user } = authStore.get();

  if (isLoggedIn && token && !user) {
    await fetchUserProfile();
  }
};

/**
 * Get token (for interceptors)
 */
export const getAuthToken = (): string | null => {
  return authStore.get().token;
};
