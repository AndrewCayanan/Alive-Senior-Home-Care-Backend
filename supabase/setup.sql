-- =============================================
-- Alive Senior Home Care — Supabase setup
-- Run this in the Supabase SQL Editor
-- (Project > SQL Editor > New query)
-- =============================================

-- Optional: a profiles table to store extra info per user
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Automatically create a profile row when a new user signs up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- =============================================
-- Care plans table — each family sees only their own
-- =============================================
create table if not exists public.care_plans (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  title text not null,
  description text,
  created_at timestamptz default now()
);

alter table public.care_plans enable row level security;

create policy "Users can view their own care plans"
  on public.care_plans for select
  using (auth.uid() = user_id);

-- (Admins/staff would insert/update rows via the Supabase dashboard
--  or a service-role backend — not via the client.)
