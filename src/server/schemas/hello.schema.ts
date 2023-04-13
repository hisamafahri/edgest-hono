import { z } from "zod";

export const getGreetResponseSchema = z.object({
  message: z.string(),
});

export type GetGreetResponse = z.infer<typeof getGreetResponseSchema>;
