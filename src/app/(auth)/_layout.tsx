import { Redirect, Slot } from "expo-router";
import { useAuthStore } from "~/features/auth/stores";

export default function AuthLayout() {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Redirect href="/home" />;
  }

  return <Slot />;
}
