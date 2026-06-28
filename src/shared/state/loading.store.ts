import { atom } from "nanostores";

export type LoadingState = {
  active: boolean;
  message?: string;
  type?: "circular" | "gradient" | "linear";
};

export const $loading = atom<LoadingState>({
  active: false,
  message: "Loading...",
  type: "circular",
});

export const showLoading = (payload?: Partial<LoadingState>) => {
  $loading.set({
    active: true,
    message: payload?.message ?? "Loading...",
    type: payload?.type ?? "circular",
  });
};

export const hideLoading = () => {
  $loading.set({
    active: false,
    message: "Loading...",
    type: "circular",
  });
};
