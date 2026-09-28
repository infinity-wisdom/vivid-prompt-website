-- Vivid Prompt MVP schema (Phase 0-1)
-- Run locally via `supabase db reset` (supabase start) or psql $DATABASE_URL

create extension if not exists "pgcrypto";

-- Categories (admin-managed, flexible)
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  created_at timestamptz default now()
);

-- Prompt templates
create table if not exists public.templates (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete set null,
  title text not null,
  description text not null,
  example_use_case text,
  fields jsonb not null default '[]'::jsonb,
  starter_structure text,
  learning_tips text,
  is_published boolean not null default false,
  is_featured boolean not null default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists templates_category_idx on public.templates(category_id);
create index if not exists templates_published_idx on public.templates(is_published);

-- Lessons (Learn -> See -> Practice)
create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete set null,
  slug text unique not null,
  title text not null,
  concept text not null, -- context | role | instructions | examples | constraints | output_format | specificity
  body text not null,
  examples jsonb not null default '[]'::jsonb, -- [{weak, improved, explanation}]
  practice jsonb not null default '{}'::jsonb,
  is_published boolean not null default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- User profiles (onboarding interests)
create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  onboarding_interests text[] not null default '{}',
  created_at timestamptz default now()
);

-- Personal prompt library (private by default, opt-in public)
create table if not exists public.prompts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  template_id uuid references public.templates(id) on delete set null,
  title text not null,
  original_input text,
  content text not null, -- finished / improved prompt
  explanation text, -- why it got better (plain language)
  visibility text not null default 'private' check (visibility in ('private','public')),
  folder text not null default 'general',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists prompts_user_idx on public.prompts(user_id);
create index if not exists prompts_visibility_idx on public.prompts(visibility);

-- Learning progress
create table if not exists public.lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  completed boolean not null default false,
  updated_at timestamptz default now(),
  primary key (user_id, lesson_id)
);

-- RLS
alter table public.categories enable row level security;
alter table public.templates enable row level security;
alter table public.lessons enable row level security;
alter table public.profiles enable row level security;
alter table public.prompts enable row level security;
alter table public.lesson_progress enable row level security;

-- Public read for published content + categories
drop policy if exists "public read categories" on public.categories;
create policy "public read categories" on public.categories for select using (true);

drop policy if exists "public read published templates" on public.templates;
create policy "public read published templates" on public.templates
  for select using (is_published = true);

drop policy if exists "public read published lessons" on public.lessons;
create policy "public read published lessons" on public.lessons
  for select using (is_published = true);

-- Profiles: owner only
drop policy if exists "owner read profile" on public.profiles;
create policy "owner read profile" on public.profiles for select using (auth.uid() = user_id);
drop policy if exists "owner write profile" on public.profiles;
create policy "owner write profile" on public.profiles for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Prompts: owner full access; public prompts readable by all
drop policy if exists "owner all prompts" on public.prompts;
create policy "owner all prompts" on public.prompts for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
drop policy if exists "public read public prompts" on public.prompts;
create policy "public read public prompts" on public.prompts for select using (visibility = 'public');

-- Lesson progress: owner only
drop policy if exists "owner all progress" on public.lesson_progress;
create policy "owner all progress" on public.lesson_progress for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Storage buckets (run once, or via supabase storage API):
-- insert into storage.buckets (id, name, public) values ('lesson-assets','lesson-assets', true), ('prompt-attachments','prompt-attachments', false)
-- on conflict (id) do nothing;
