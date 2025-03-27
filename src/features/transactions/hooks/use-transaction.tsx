import { useQuery } from "@tanstack/react-query";
import { api } from "~/core/api/http-client";
import { TransactionAmountSchema, TransactionsSchema } from "../schemas";

export const useTransaction = () => {
  const transactions = useQuery({
    queryKey: ["transactions"],

    queryFn: async () => {
      const response = await api.get("transactions");

      const result = TransactionsSchema.parse(await response.json());

      return result;
    },
  });

  const amount = useQuery({
    queryKey: ["transactions", "amount"],

    queryFn: async () => {
      const response = await api.get("transactions/amount");

      const result = TransactionAmountSchema.parse(await response.json());

      return result;
    },
  });

  return { transactions, amount };
};
