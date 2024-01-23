import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const SignupSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
