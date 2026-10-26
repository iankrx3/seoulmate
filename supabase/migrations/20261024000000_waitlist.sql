create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'landing',
  adult_confirmed_at timestamptz not null,
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

-- No anon or authenticated policies. Inserts go through the server
-- using the service role, which bypasses RLS.
