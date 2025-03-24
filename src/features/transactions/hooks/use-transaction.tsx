import { useQuery } from "@tanstack/react-query";
import { api } from "~/core/api/http-client";
import { useAuthStore } from "~/features/auth/stores";
import { TransactionsSchema } from "../schemas";

export const useTransaction = () => {
  const transactions = useQuery({
    queryKey: ["transactions"],

    queryFn: async () => {
      const { accesToken } = useAuthStore.getState();

      const response = await api.get(
        "transactions",
        // {
        // headers: { Authorization: `Bearer ${accesToken}` },
        // }
      );

      const result = TransactionsSchema.parse(await response.json());
      return result;
    },
  });

  return { transactions };
};
