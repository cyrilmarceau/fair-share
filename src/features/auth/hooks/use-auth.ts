import { useMutation } from "@tanstack/react-query";
import { api } from "~/core/api/http-client";
import { LoginResponseSchema } from "../schemas";
import { setIsAuthenticated } from "../stores";
import type { LoginSchemaType } from "../types";
export const useAuth = () => {
  const login = useMutation({
    mutationFn: async (credentials: LoginSchemaType) => {
      const response = await api.post("login", { json: credentials }).json();

      return LoginResponseSchema.parse(response);
    },
    onSuccess(data, variables, context) {
      console.log("Login success", data);
      setIsAuthenticated(true);
    },
    onError(error, variables, context) {
      console.log("Login error", error);
    },
    onSettled(data, error, variables, context) {
      console.log("Login settled", data, error);
    },
    onMutate(variables) {
      console.log("Login mutate", variables);
    },
  });

  return { login };
};
