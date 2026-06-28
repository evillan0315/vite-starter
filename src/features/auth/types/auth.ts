/**
 * Credentials used for email/password authentication.
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Authenticated user profile.
 */
export interface UserProfile {
  id: string;

  email: string;

  firstName?: string;
  lastName?: string;

  /**
   * Optional display name.
   */
  name?: string;

  /**
   * Optional avatar URL.
   */
  avatar?: string;

  /**
   * Primary role.
   */
  role?: string;

  /**
   * Multiple roles for RBAC.
   */
  roles?: string[];

  /**
   * Additional permissions.
   */
  permissions?: string[];
}

/**
 * Authentication response.
 */
export interface AuthResponse {
  /**
   * JWT access token.
   */
  token: string;

  /**
   * Optional refresh token.
   */
  refreshToken?: string;

  /**
   * Authenticated user.
   */
  user: UserProfile;

  /**
   * Expiration timestamp (Unix epoch seconds).
   */
  expiresAt?: number;
}