import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <CustomText>Welcome!</CustomText>
    </View>
  );
}

export const CustomText = ({ children }: PropsWithChildren) => {
  return <Text>{children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
