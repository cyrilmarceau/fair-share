import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { View } from "react-native";
import { Button, TextInput, useTheme, Text } from "react-native-paper";
import { useAuth } from "~/features/auth/hooks";
import { LoginSchema } from "~/features/auth/schemas";
import type { LoginSchemaType } from "~/features/auth/types";

const SignInPage = () => {
  const { login } = useAuth();

  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    defaultValues: {
      email: "cyril.marceau.per@gmail.com",
      password: "password",
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    login.mutate(data);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: theme.colors.background,
      }}
    >
      <Text
        variant="headlineMedium"
        style={{
          color: theme.colors.onBackground,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Sign In
      </Text>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            testID="Email"
            label="Email"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.email}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ marginBottom: 10 }}
          />
        )}
        name="email"
      />
      {errors.email ? (
        <Text style={{ color: theme.colors.error }}>
          {errors.email.message}
        </Text>
      ) : null}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            testID="Password"
            label="Password"
            mode="outlined"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.password}
            style={{ marginBottom: 10 }}
          />
        )}
        name="password"
      />
      {errors.password ? (
        <Text style={{ color: theme.colors.error }}>
          {errors.password.message}
        </Text>
      ) : null}
      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={{ marginTop: 20 }}
      >
        Login
      </Button>
    </View>
  );
};

export default SignInPage;
