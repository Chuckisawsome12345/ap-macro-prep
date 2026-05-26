"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useProgress } from "@/lib/progress";
import { Nav } from "./Nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const loadProgress = useProgress((s) => s.loadProgress);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.replace("/login");
        return;
      }
      await loadProgress();
      setReady(true);
    };

    if (pathname === "/login") {
      setReady(true);
      return;
    }

    init();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session && pathname !== "/login") router.replace("/login");
    });

    return () => subscription.unsubscribe();
  }, [pathname]);

  if (!ready) return null;

  if (pathname === "/login") return <>{children}</>;

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">{children}</main>
      <footer className="border-t text-xs text-slate-500 py-4 text-center">
        AP Macro Prep — personal study tool. Practice items are original, modeled on patterns from
        publicly released AP exams.
      </footer>
    </>
  );
}
