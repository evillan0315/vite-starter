import { atom } from "nanostores";

import { authService } from "@/features/auth/api/authService";

import type { LoginCredentials, UserProfile } from "@/features/auth/types/auth";

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
}

const STORAGE_KEY = "jwt_token";

const getStoredToken = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const initialToken = getStoredToken();

export const authStore = atom<AuthState>({
  isLoggedIn: Boolean(initialToken),
  token: initialToken,
  user: null,
  loading: false,
  error: null,
});

const setState = (patch: Partial<AuthState>): void => {
  authStore.set({
    ...authStore.get(),
    ...patch,
  });
};

const clearSession = (): void => {
  authStore.set({
    isLoggedIn: false,
    token: null,
    user: null,
    loading: false,
    error: null,
  });
};

authStore.listen(({ token }) => {
  try {
    if (token) {
      localStorage.setItem(STORAGE_KEY, token);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Ignore storage failures.
  }
});

export const setAuthDetails = (token: string, user: UserProfile): void => {
  authStore.set({
    isLoggedIn: true,
    token,
    user,
    loading: false,
    error: null,
  });
};

export const setLoading = (loading: boolean): void => {
  setState({ loading });
};

export const setError = (error: string | null): void => {
  setState({ error });
};

export const loginUser = async (
  credentials: LoginCredentials,
): Promise<{
  success: boolean;
  error?: string;
}> => {
  setState({
    loading: true,
    error: null,
  });

  try {
    const response = await authService.login(credentials);

    setAuthDetails(response.token, response.user);

    return {
      success: true,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Login failed.";

    setState({
      loading: false,
      error: message,
    });

    return {
      success: false,
      error: message,
    };
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await authService.logout();
  } finally {
    clearSession();
  }
};

let profileRequest: Promise<void> | null = null;

export const fetchUserProfile = async (): Promise<void> => {
  const state = authStore.get();

  if (!state.token || state.user) {
    return;
  }

  if (profileRequest) {
    return profileRequest;
  }

  profileRequest = (async () => {
    setState({
      loading: true,
      error: null,
    });

    try {
      const user = await authService.getProfile();

      setState({
        user,
        loading: false,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch profile.";

      clearSession();

      setState({
        error: message,
      });

      try {
        await authService.logout();
      } catch {
        // Ignore backend logout failures.
      }
    } finally {
      profileRequest = null;
    }
  })();

  return profileRequest;
};

export const initAuth = async (): Promise<void> => {
  const { token, user } = authStore.get();

  if (!token || user) {
    return;
  }

  await fetchUserProfile();
};

export const getAuthToken = (): string | null => {
  return authStore.get().token;
};
