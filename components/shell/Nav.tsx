"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

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
  const router = useRouter();
  const [isAnonymous, setIsAnonymous] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setIsAnonymous(user?.is_anonymous ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setIsAnonymous(session?.user?.is_anonymous ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

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
        {isAnonymous === true ? (
          <Link
            href="/login"
            className="ml-auto text-xs text-accent underline"
          >
            Sign in
          </Link>
        ) : (
          <button
            onClick={signOut}
            className="ml-auto text-xs text-slate-500 hover:text-slate-800 transition"
          >
            Sign out
          </button>
        )}
      </div>
    </nav>
  );
}
