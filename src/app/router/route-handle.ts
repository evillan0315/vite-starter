import type { ReactNode } from "react";

export interface RouteHandle {
  /**
   * Page title.
   * Used for document.title and browser history.
   */
  title: string;

  /**
   * Breadcrumb label.
   */
  breadcrumb?: string;

  /**
   * Sidebar/Menu label.
   */
  label?: string;

  /**
   * Material Icon or custom React icon.
   */
  icon?: ReactNode;

  /**
   * Show route in sidebar navigation.
   */
  showInSidebar?: boolean;

  /**
   * Show route in top navigation.
   */
  showInNavbar?: boolean;

  /**
   * Navigation ordering.
   */
  order?: number;

  /**
   * Route requires authentication.
   */
  requiresAuth?: boolean;

  /**
   * Route is only accessible to guests.
   */
  guestOnly?: boolean;

  /**
   * Required permissions.
   */
  permissions?: string[];

  /**
   * Required roles.
   */
  roles?: string[];

  /**
   * Optional feature flag.
   */
  feature?: string;

  /**
   * SEO description.
   */
  description?: string;

  /**
   * Whether to keep the component mounted.
   */
  keepAlive?: boolean;

  /**
   * Whether to preload the lazy component.
   */
  preload?: boolean;

  /**
   * Hide this route from breadcrumbs.
   */
  hideBreadcrumb?: boolean;

  /**
   * Hide this route from navigation.
   */
  hidden?: boolean;
}
