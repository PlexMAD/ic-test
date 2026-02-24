import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatStringBool = (
  value: "true" | "false" | "TRUE" | "FALSE"
) => {
  return value.toLowerCase() === "true" ? "Да" : "Нет";
};