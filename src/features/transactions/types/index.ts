import { z } from "zod";
import { TransactionSchema, TransactionsSchema } from "../schemas";

type Transaction = z.infer<typeof TransactionSchema>;
type Transactions = z.infer<typeof TransactionsSchema>;

export type { Transaction, Transactions };
