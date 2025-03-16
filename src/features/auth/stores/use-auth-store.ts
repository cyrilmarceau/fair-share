import { create } from "zustand";
import type { AuthStore } from "../types";

const useAuthStore = create<AuthStore>((set, get) => ({
  isAuthenticated: false,
  accesToken: null,
  setIsAuthenticated: (isAuthenticated): void => set({ isAuthenticated }),
  setAccessToken: (token: string): void => set({ accesToken: token }),
  resetAccessToken: (): void => set({ accesToken: null }),
}));

const { setIsAuthenticated, setAccessToken } = useAuthStore.getState();

export { useAuthStore, setIsAuthenticated, setAccessToken };
