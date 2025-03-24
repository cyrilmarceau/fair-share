import { z } from "zod";

const TransactionSchema = z.object({
  to: z.string(),
  direction: z.enum(["to_pay", "to_receive"]),
  amount: z.number(),
  title: z.string(),
  category: z.string(),
  due_date: z.string(),
  id: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
});

const TransactionsSchema = z.object({
  items: z.array(TransactionSchema),
  total: z.number(),
  page: z.number(),
  size: z.number(),
  pages: z.number(),
});

export { TransactionSchema, TransactionsSchema };
