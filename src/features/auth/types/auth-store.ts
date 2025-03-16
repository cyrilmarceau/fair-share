interface AuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  accesToken: string | null;

  setAccessToken: (token: string) => void;
  resetAccessToken: () => void;
}

export { AuthStore };
