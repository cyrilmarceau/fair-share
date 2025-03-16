import React from "react";
import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";

interface FormErrorProps {
  message?: string;
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  const theme = useTheme();
  if (!message) return null;
  return <Text style={{ color: theme.colors.error }}>{message}</Text>;
};

export default React.memo(FormError);
