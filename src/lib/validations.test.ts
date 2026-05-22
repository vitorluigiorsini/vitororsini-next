import { describe, it, expect } from "vitest";
import { contactSchema, githubRepoSchema } from "./validations";

describe("contactSchema", () => {
  it("accepts valid contact data", () => {
    const result = contactSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      message: "Hello, I would like to get in touch!",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = contactSchema.safeParse({
      name: "John",
      email: "not-an-email",
      message: "Hello, this is a message",
    });
    expect(result.success).toBe(false);
  });

  it("rejects short name", () => {
    const result = contactSchema.safeParse({
      name: "J",
      email: "john@example.com",
      message: "Hello, this is a valid message",
    });
    expect(result.success).toBe(false);
  });

  it("rejects short message", () => {
    const result = contactSchema.safeParse({
      name: "John Doe",
      email: "john@example.com",
      message: "Short",
    });
    expect(result.success).toBe(false);
  });
});

describe("githubRepoSchema", () => {
  it("accepts valid repo data", () => {
    const result = githubRepoSchema.safeParse({
      id: 123,
      name: "my-repo",
      description: "A great repo",
      html_url: "https://github.com/user/repo",
      homepage: "https://example.com",
      topics: ["react", "typescript"],
      language: "TypeScript",
      stargazers_count: 42,
      forks_count: 10,
    });
    expect(result.success).toBe(true);
  });

  it("accepts nullable fields", () => {
    const result = githubRepoSchema.safeParse({
      id: 456,
      name: "another-repo",
      description: null,
      html_url: "https://github.com/user/another",
      homepage: null,
      topics: [],
      language: null,
      stargazers_count: 0,
      forks_count: 0,
    });
    expect(result.success).toBe(true);
  });
});
