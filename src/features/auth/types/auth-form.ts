import type { LoginSchema } from "../schemas";
import { z } from "zod";

type LoginSchemaType = z.infer<typeof LoginSchema>;

export { LoginSchemaType };
