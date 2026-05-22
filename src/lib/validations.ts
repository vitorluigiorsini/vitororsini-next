import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must have at least 2 characters")
    .max(100, "Name must have at most 100 characters"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must have at least 10 characters")
    .max(5000, "Message must have at most 5000 characters"),
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
