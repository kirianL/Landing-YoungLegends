import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/es"); // Default to Spanish home as a safe fallback
}
