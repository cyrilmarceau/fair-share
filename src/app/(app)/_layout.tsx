import { Redirect, Slot } from "expo-router";
import { useAuthStore } from "~/features/auth/stores";

export default function AppLayout() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }
  return <Slot />;
}
