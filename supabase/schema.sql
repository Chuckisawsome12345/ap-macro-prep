-- Run this entire file in your Supabase project:
-- Supabase Dashboard → SQL Editor → New query → paste → Run

create table public.mcq_attempts (
  id            uuid    default gen_random_uuid() primary key,
  user_id       uuid    references auth.users(id) on delete cascade not null,
  question_id   text    not null,
  unit          smallint not null,
  topic         text    not null,
  correct       boolean not null,
  timestamp     bigint  not null,
  created_at    timestamptz default now()
);

create table public.frq_scores (
  id              uuid    default gen_random_uuid() primary key,
  user_id         uuid    references auth.users(id) on delete cascade not null,
  prompt_id       text    not null,
  points_earned   smallint not null,
  points_possible smallint not null,
  timestamp       bigint  not null,
  created_at      timestamptz default now()
);

create table public.graph_results (
  id           uuid    default gen_random_uuid() primary key,
  user_id      uuid    references auth.users(id) on delete cascade not null,
  challenge_id text    not null,
  unit         smallint not null,
  passed       boolean not null,
  timestamp    bigint  not null,
  created_at   timestamptz default now()
);

-- Row-level security: each user can only see and modify their own rows
alter table public.mcq_attempts   enable row level security;
alter table public.frq_scores     enable row level security;
alter table public.graph_results  enable row level security;

create policy "own mcq_attempts"  on public.mcq_attempts  for all using (auth.uid() = user_id);
create policy "own frq_scores"    on public.frq_scores    for all using (auth.uid() = user_id);
create policy "own graph_results" on public.graph_results for all using (auth.uid() = user_id);
