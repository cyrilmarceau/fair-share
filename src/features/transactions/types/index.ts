import { z } from "zod";
import {
  TransactionSchema,
  TransactionsSchema,
  type TransactionAmountSchema,
} from "../schemas";

type Transaction = z.infer<typeof TransactionSchema>;
type Transactions = z.infer<typeof TransactionsSchema>;

type TransactionAmount = z.infer<typeof TransactionAmountSchema>;

export type { Transaction, Transactions, TransactionAmount };
