/**
 * Merges Tailwind CSS class names, filtering out falsy values.
 *
 * Usage:
 *   cn("px-4 py-2", isActive && "bg-moss-green-500", disabled && "opacity-50")
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}
