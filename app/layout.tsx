import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/shell/Nav";

export const metadata: Metadata = {
  title: "AP Macro Prep",
  description: "Personal study tool for AP Macroeconomics — units, graphing, MCQ, FRQ.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">{children}</main>
        <footer className="border-t text-xs text-slate-500 py-4 text-center">
          AP Macro Prep — personal study tool. Practice items are original, modeled on patterns from
          publicly released AP exams.
        </footer>
      </body>
    </html>
  );
}
