import { Stack } from "expo-router";
import { useMemo } from "react";

const Layout = ({ segment }: { segment: string }) => {
  const rootScreen = useMemo(() => {
    switch (segment) {
      case "(home)":
        return (
          <Stack.Screen
            name="index"
            options={{ title: "Home", headerShown: true }}
          />
        );
      case "(settings)":
        return (
          <Stack.Screen
            name="settings"
            options={{ title: "Settings", headerShown: true }}
          />
        );
    }
  }, [segment]);

  return (
    <Stack>
      {rootScreen}
      <Stack.Screen name="transaction" options={{ title: "Transactions" }} />
    </Stack>
  );
};

export default Layout;
