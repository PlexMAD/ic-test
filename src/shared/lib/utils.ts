import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatStringBool = (
  value: "true" | "false" | "TRUE" | "FALSE" | 1 | 0 | 3
) => {
  if (typeof value === "number") {
    return value !== 0 ? "Да" : "Нет";
  }

  return value.toLowerCase() === "true" ? "Да" : "Нет";
};