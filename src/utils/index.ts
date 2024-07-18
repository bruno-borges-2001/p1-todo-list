import clsx, { ClassValue } from "clsx";
import { twMerge } from "tw-merge";

export default function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}