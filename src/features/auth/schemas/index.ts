import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email({ message: "Your email is invalid" }),
  password: z.string().min(4, { message: "Minimum 1 characters" }),
});

const LoginResponseSchema = z.object({
  access_token: z.string(),
});

export { LoginSchema, LoginResponseSchema };
