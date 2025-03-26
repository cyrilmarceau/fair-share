import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const TransactionDetail = () => {
  const local = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>{JSON.stringify(local, null, 4)}</Text>
    </View>
  );
};

export default TransactionDetail;
