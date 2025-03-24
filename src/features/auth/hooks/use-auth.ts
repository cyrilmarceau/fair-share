import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { api } from "~/core/api/http-client";
import { LoginResponseSchema } from "../schemas";
import { setAccessToken, setIsAuthenticated } from "../stores";
import type { LoginSchemaType } from "../types";

export const useAuth = () => {
  const login = useMutation({
    mutationKey: ["login"],
    mutationFn: async (credentials: LoginSchemaType) => {
      const response = await api.post("login", { json: credentials }).json();

      return LoginResponseSchema.parse(response);
    },
    onSuccess(data, variables, context) {
      console.log("Login success", data);

      setIsAuthenticated(true);
      setAccessToken(data.access_token);
    },
    async onError(error, variables, context) {
      const { detail } = await error.response.json();

      Toast.show({
        type: "error",
        text1: "An error occured",
        text2: detail.message,
      });
    },
  });

  return { login };
};
