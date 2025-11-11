import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.email("Please enter a valid email address"),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword", "password"],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
