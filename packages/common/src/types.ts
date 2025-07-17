import { z } from "zod";

export const CreateUserSchema = z.object({
  username: z.string().min(3).max(20),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const roomSchema = z.object({
  name: z.string(),
});

export type CreateUser = z.infer<typeof CreateUserSchema>;
export type LoginUser = z.infer<typeof LoginUserSchema>;
export type Room = z.infer<typeof roomSchema>;
