import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome precisa ter no mínimo 2 caracteres")
    .max(100, "Nome pode ter no máximo 100 caracteres"),
  email: z.email("Endereço de email inválido"),
  message: z
    .string()
    .min(10, "Mensagem precisa ter no mínimo 10 caracteres")
    .max(5000, "Mensagem pode ter no máximo 5000 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const githubRepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  html_url: z.url(),
  homepage: z.string().nullable(),
  topics: z.array(z.string()),
  language: z.string().nullable(),
  stargazers_count: z.number(),
  forks_count: z.number(),
});

export type GithubRepo = z.infer<typeof githubRepoSchema>;
