"use client";

import { useState } from "react";
import Link from "next/link";
import { signup } from "../auth-actions";

export default function SignupForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    setSuccess(null);
    setSubmitting(true);
    const result = await signup(formData);
    if (result?.error) {
      setError(result.error);
    } else if (result?.success) {
      setSuccess(result.success);
    }
    setSubmitting(false);
  };

  return (
    <section className="auth-section">
      <div className="auth-card">
        <h1>Create Your Account</h1>
        <p className="auth-sub">
          Sign up for the family portal to stay connected with your loved one&apos;s care.
        </p>

        {error && <div className="auth-error" style={{ marginBottom: "1.25rem" }}>{error}</div>}
        {success && <div className="auth-success" style={{ marginBottom: "1.25rem" }}>{success}</div>}

        {!success && (
          <form className="auth-form" action={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" placeholder="Jane Smith" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="jane@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="At least 6 characters" minLength={6} required />
            </div>

            <button type="submit" className="auth-submit" disabled={submitting}>
              {submitting ? "Creating account..." : "Sign Up"}
            </button>
          </form>
        )}

        <div className="auth-footer-link">
          Already have an account? <Link href="/login">Log in</Link>
        </div>
      </div>
    </section>
  );
}
