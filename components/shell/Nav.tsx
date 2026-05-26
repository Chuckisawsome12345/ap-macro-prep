"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/units/1", label: "Units" },
  { href: "/practice/mcq", label: "MCQ" },
  { href: "/practice/frq", label: "FRQ" },
  { href: "/practice/graphing", label: "Graphing" },
  { href: "/exam", label: "Mock Exam" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-6">
        <Link href="/" className="font-semibold text-ink">
          AP Macro Prep
        </Link>
        <div className="flex gap-1 text-sm">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href.split("/").slice(0, 3).join("/"));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "px-3 py-1.5 rounded-md transition " +
                  (active ? "bg-accentSoft text-accent" : "text-slate-600 hover:bg-slate-100")
                }
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
