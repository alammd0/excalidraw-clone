import { z } from "zod";

export const CreateUserSchema = z.object({
    username : z.string().min(3).max(20),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
});