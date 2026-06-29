import axios from "axios";

import { getAuthToken } from "@/features/auth/model/authStore";

import type {
  AuthResponse,
  LoginCredentials,
  UserProfile,
} from "@/features/auth/types/auth";

const API_BASE_URL = "/api";

const USE_MOCK_AUTH = import.meta.env.VITE_USE_MOCK_AUTH === true;

const sleep = (ms = 800) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_USER: UserProfile = {
  id: "1",
  email: "admin@example.com",
  firstName: "Eddie",
  lastName: "Villanueva",
  avatar: "https://i.pravatar.cc/300?img=68",
  role: "admin",
};

const MOCK_TOKEN = "mock-jwt-token-1234567890abcdefghijklmnopqrstuvwxyz";

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    if (USE_MOCK_AUTH) {
      await sleep();

      if (
        credentials.email !== "admin@example.com" ||
        credentials.password !== "password"
      ) {
        throw new Error("Invalid email or password.");
      }

      return {
        token: MOCK_TOKEN,
        user: MOCK_USER,
      };
    }

    try {
      const { data } = await axios.post<AuthResponse>(
        `${API_BASE_URL}/auth/login`,
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message ?? error.message ?? "Login failed",
        );
      }

      throw new Error((error as Error).message ?? "Unknown login error");
    }
  },

  async logout(): Promise<void> {
    if (USE_MOCK_AUTH) {
      await sleep(300);
      return;
    }

    const token = getAuthToken();

    if (!token) {
      return;
    }

    try {
      await axios.post(
        `${API_BASE_URL}/auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },

  async getProfile(): Promise<UserProfile> {
    if (USE_MOCK_AUTH) {
      await sleep(500);
      return MOCK_USER;
    }

    const token = getAuthToken();

    if (!token) {
      throw new Error("Authentication token is missing.");
    }

    try {
      const { data } = await axios.get<UserProfile>(`${API_BASE_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message ??
            error.message ??
            "Failed to fetch profile",
        );
      }

      throw new Error((error as Error).message ?? "Unknown profile error");
    }
  },
};
