-- Local plain-Postgres bootstrap (no Supabase stack required).
-- Creates minimal `auth` stubs so the Supabase migration + RLS compile,
-- then loads the MVP schema. For full Supabase Auth/Storage use `supabase start` (needs Docker).

create schema if not exists auth;
create table if not exists auth.users (
  id uuid primary key default gen_random_uuid(),
  email text
);
create or replace function auth.uid() returns uuid
  language sql stable as $$ select null::uuid $$;

\i migrations/0001_mvp_schema.sql
\i seed.sql
