import React from "react";
import { Controller } from "react-hook-form";
import type { KeyboardTypeOptions } from "react-native";
import { TextInput } from "react-native-paper";

interface FormInputProps {
  control: any;
  name: string;
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  error?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  control,
  name,
  label,
  secureTextEntry = false,
  keyboardType = "default",
  error = false,
}) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          label={label}
          mode="outlined"
          secureTextEntry={secureTextEntry}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          error={error}
          keyboardType={keyboardType}
          autoCapitalize="none"
          style={{ marginBottom: 10 }}
        />
      )}
      name={name}
    />
  );
};

export default React.memo(FormInput);
