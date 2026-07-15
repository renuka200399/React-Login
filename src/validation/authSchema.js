import { z } from "zod";

// Email Login Schema
export const emailLoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});

// Phone Login Schema
export const phoneLoginSchema = z.object({
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});

// Signup Schema
export const signupSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "Full name is required"),

    email: z
      .string()
      .email("Enter a valid email"),

    phone: z
      .string()
      .regex(/^[6-9]\d{9}$/, "Enter a valid phone number"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
        "Password must contain uppercase, lowercase, number and special character"
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });