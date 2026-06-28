import { initAuth } from "@/features/auth/model/authStore";

export async function bootstrap(): Promise<void> {
  initAuth();

  // Future initialization:
  // await loadConfig();
  // await initAnalytics();
  // await initSentry();
  // await preloadUser();
}