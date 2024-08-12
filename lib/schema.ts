import { z } from "zod";

export const FormPostSchema = z.object({
  title: z.string().nonempty("Title is required"),
  content: z
    .string()
    .nonempty("content is required")
    .min(8, { message: "Content must be at least 8 character." }),
});

export const FormLogSchema = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z.string().nonempty("content is required"),
});
