"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"sign_in" | "sign_up">("sign_in");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } =
      mode === "sign_in"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });

    setLoading(false);
    if (error) { setError(error.message); return; }
    router.replace("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="w-full max-w-sm rounded-xl border bg-white p-8 space-y-6 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-ink">AP Macro Prep</h1>
          <p className="text-sm text-slate-500 mt-1">
            {mode === "sign_in" ? "Sign in to your account" : "Create an account"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase text-slate-500 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-slate-500 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-md bg-accent text-white text-sm disabled:opacity-50"
          >
            {loading ? "…" : mode === "sign_in" ? "Sign in" : "Sign up"}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500">
          {mode === "sign_in" ? "No account?" : "Already have an account?"}{" "}
          <button
            onClick={() => { setMode(mode === "sign_in" ? "sign_up" : "sign_in"); setError(null); }}
            className="text-accent underline"
          >
            {mode === "sign_in" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
