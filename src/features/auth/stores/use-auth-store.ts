import { create } from "zustand";
import type { AuthStore } from "../types";

const useAuthStore = create<AuthStore>((set, get) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated): void => set({ isAuthenticated }),
}));

const { setIsAuthenticated } = useAuthStore.getState();

export { useAuthStore, setIsAuthenticated };
