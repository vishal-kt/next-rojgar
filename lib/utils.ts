import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names conditionally.
 * Since we're using Tailwind v4 (no tailwind-merge needed for basic usage),
 * we use clsx for conditional class joining.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Format a date string for display. */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** Create a URL-friendly slug from a string. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/** Truncate text to a specified length. */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
