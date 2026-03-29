import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily — Nutrition",
  description: "Track meals, macros, and goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#ECE8D8] font-sans text-zinc-900">
        {children}
      </body>
    </html>
  );
}
