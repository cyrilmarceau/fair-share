import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { useAuth } from "~/features/auth/hooks";
import { LoginSchema } from "~/features/auth/schemas";
import type { LoginSchemaType } from "~/features/auth/types";
import { FormError, FormInput } from "~/shared/components";

const SignInPage = () => {
  const { login } = useAuth();

  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    defaultValues: {
      email: "a@gmail.com",
      password: "password",
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    login.mutateAsync(data);
  };

  if (login.isSuccess) {
    alert(login.isSuccess);
    // router.replace("/login");
  }

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

      <FormInput
        control={control}
        name="email"
        label="Email"
        keyboardType="email-address"
        error={!!errors.email}
      />
      <FormError message={errors.email?.message} />

      <FormInput
        control={control}
        name="password"
        label="Password"
        secureTextEntry
        error={!!errors.password}
      />
      <FormError message={errors.password?.message} />

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
