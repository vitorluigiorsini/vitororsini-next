import type { TranslationPair } from "./translations";

export function t(obj: TranslationPair, language: string): string {
  return obj[language] ?? obj["pt-br"] ?? "";
}

export function tv(value: unknown, language: string): string | string[] {
  if (typeof value === "object" && value !== null) {
    const record = value as Record<string, string | string[]>;
    const result = record[language];
    if (result !== undefined) return result;
    const fallback = record["pt-br"];
    if (fallback !== undefined) return fallback;
  }
  return String(value);
}
