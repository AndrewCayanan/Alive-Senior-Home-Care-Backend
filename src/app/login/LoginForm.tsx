"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { login } from "../auth-actions";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/portal";
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    setSubmitting(true);
    const result = await login(formData);
    if (result?.error) {
      setError(result.error);
      setSubmitting(false);
    }
  };

  return (
    <section className="auth-section">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p className="auth-sub">
          Log in to your family portal to view care plans, schedules, and updates.
        </p>

        {error && <div className="auth-error" style={{ marginBottom: "1.25rem" }}>{error}</div>}

        <form className="auth-form" action={handleSubmit}>
          <input type="hidden" name="redirectTo" value={redirectTo} />

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="jane@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="auth-submit" disabled={submitting}>
            {submitting ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="auth-footer-link">
          Don&apos;t have an account? <Link href="/signup">Sign up</Link>
        </div>
      </div>
    </section>
  );
}
