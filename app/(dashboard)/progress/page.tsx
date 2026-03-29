import { redirect } from "next/navigation";

/** Legacy URL; Domains now lives at `/domains`. */
export default function ProgressRedirectPage() {
  redirect("/domains");
}
