-- Run this once in the Supabase dashboard: SQL Editor -> New query -> Run.
-- One row per player, holding the same JSON blob the game keeps in localStorage.

create table if not exists public.saves (
  user_id    uuid primary key references auth.users on delete cascade,
  state      jsonb       not null,
  updated_at timestamptz not null default now()
);

alter table public.saves enable row level security;

-- A signed-in player may read and write their own row, and no one else's.
create policy "read own save"   on public.saves
  for select using (auth.uid() = user_id);

create policy "create own save" on public.saves
  for insert with check (auth.uid() = user_id);

create policy "update own save" on public.saves
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
