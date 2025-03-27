import { Stack } from "expo-router";

export default function TransactionLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackVisible: true,
        gestureEnabled: true,
        headerBackTitle: "Back",
        headerShown: false,
      }}
    >
      <Stack.Screen name="[id]" />
      <Stack.Screen name="create" />
    </Stack>
  );
}
