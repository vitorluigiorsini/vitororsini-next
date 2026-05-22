import { describe, it, expect } from "vitest";
import { t, tv } from "./utils";

describe("t", () => {
  it("returns the correct language value", () => {
    const obj = { "pt-br": "Olá", en: "Hello" };
    expect(t(obj, "pt-br")).toBe("Olá");
    expect(t(obj, "en")).toBe("Hello");
  });

  it("falls back to pt-br when language is missing", () => {
    const obj = { "pt-br": "Olá", en: "Hello" };
    expect(t(obj, "es")).toBe("Olá");
  });

  it("returns empty string when no match", () => {
    const obj = { en: "Hello" };
    expect(t(obj, "es")).toBe("");
  });
});

describe("tv", () => {
  it("returns translated string for object values", () => {
    const value = { "pt-br": "Desenvolvedor", en: "Developer" };
    expect(tv(value, "pt-br")).toBe("Desenvolvedor");
    expect(tv(value, "en")).toBe("Developer");
  });

  it("returns translated array for array values", () => {
    const value = {
      "pt-br": ["Ponto 1", "Ponto 2"],
      en: ["Point 1", "Point 2"],
    };
    const result = tv(value, "en");
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(["Point 1", "Point 2"]);
  });

  it("returns the value as string for non-object inputs", () => {
    expect(tv("plain string", "en")).toBe("plain string");
    expect(tv(42, "en")).toBe("42");
  });
});
