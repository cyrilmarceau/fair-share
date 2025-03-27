import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function TransactionDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>This is the transaction page for {id}</Text>
    </View>
  );
}
