# Alive Senior Home Care — Next.js + Supabase

This is your site converted to Next.js (App Router) with Supabase authentication
and a basic family client portal.

## 1. Install dependencies

```bash
npm install
```

## 2. Set up Supabase

1. Go to your Supabase project → **Project Settings → API**.
2. Copy the **Project URL** and **anon/public key**.
3. Copy `.env.local.example` to `.env.local` and fill in those two values:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT-REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

## 3. Run the database setup

In Supabase Dashboard → **SQL Editor**, paste and run the contents of
`supabase/setup.sql`. This creates:

- `profiles` table (auto-filled on signup)
- `care_plans` table with Row Level Security so each family only sees
  their own care plan rows

## 4. Configure email confirmation (recommended)

In Supabase Dashboard → **Authentication → URL Configuration**, set:

- **Site URL**: your production URL (e.g. `https://your-domain.com`)
- Add `http://localhost:3000` to **Redirect URLs** for local dev.

By default, Supabase requires email confirmation before login. You can
disable this in **Authentication → Providers → Email** for testing
(toggle "Confirm email" off), but keep it on for production.

## 5. Run locally

```bash
npm run dev
```

Visit http://localhost:3000

## Pages

| Route        | Description                                      |
|--------------|---------------------------------------------------|
| `/`          | Homepage (formerly index.html)                    |
| `/about`     | About page                                         |
| `/contact`   | Contact page with EmailJS form                     |
| `/login`     | Login form (Supabase auth)                         |
| `/signup`    | Signup form (Supabase auth)                        |
| `/portal`    | **Protected** — family client portal               |

## How auth works

- `src/middleware.ts` runs on every request: it refreshes the Supabase
  session and redirects unauthenticated users away from `/portal` to
  `/login`, and redirects logged-in users away from `/login`/`/signup`
  to `/portal`.
- `src/app/auth-actions.ts` contains Server Actions for `login`,
  `signup`, and `logout`.
- `src/utils/supabase/` contains the browser client, server client,
  and middleware helper following the official `@supabase/ssr` pattern.

## Adding real care plan data

The portal queries a `care_plans` table filtered by the logged-in
user's `id`. To populate it for a family:

1. Find the user's UUID in Supabase Dashboard → Authentication → Users.
2. Insert a row into `care_plans` with that `user_id`, a `title`, and
   `description` (via Table Editor or SQL).

For a full admin workflow (staff adding/editing plans through a UI),
you'd add an admin-only dashboard — let me know if you'd like that
built out next.

## Notes

- All original styling (`globals.css`) and the original `script.js`
  (scroll effects, FAQ accordion, mobile menu, EmailJS) are preserved.
- The contact form's EmailJS integration was converted into a React
  client component (`src/components/ContactForm.tsx`) with the same
  service/template IDs as before.
- Google Maps script references were left out since they were
  commented out in the original — re-add if needed.
