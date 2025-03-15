import { useMutation } from "@tanstack/react-query";
import { LoginResponseSchema } from "../schemas";
import type { LoginSchemaType } from "../types";
import { setIsAuthenticated } from "../stores";

export const useAuth = () => {
  const login = useMutation({
    mutationFn: async (credentials: LoginSchemaType) => {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();

      return LoginResponseSchema.parse(data);
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
