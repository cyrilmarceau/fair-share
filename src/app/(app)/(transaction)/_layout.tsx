import { Stack } from "expo-router";

export default function UserLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          title: "Transaction details",
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          title: "Create a transaction",
        }}
      />
    </Stack>
  );
}
