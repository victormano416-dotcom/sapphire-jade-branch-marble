create table if not exists profiles (
  user_id text primary key,
  display_name text not null default '',
  avatar text,
  app_name text not null default 'BANKAI',
  theme text not null default 'obsidian',
  month_start_day integer not null default 1,
  privacy_hidden boolean not null default false,
  plan text not null default 'free',
  ambient boolean not null default false,
  celebrate boolean not null default true,
  onboarded boolean not null default false,
  updated_at timestamptz not null default now()
);

create table if not exists incomes (
  id text primary key,
  user_id text not null,
  kind text not null,
  description text not null,
  amount_cents integer not null,
  recurring boolean not null default false,
  year integer not null,
  month integer not null,
  day integer,
  created_at timestamptz not null default now()
);
create index if not exists incomes_user_idx on incomes (user_id);

create table if not exists expenses (
  id text primary key,
  user_id text not null,
  category text not null,
  description text not null,
  amount_cents integer not null,
  fixed boolean not null default false,
  recurring boolean not null default false,
  year integer not null,
  month integer not null,
  day integer,
  created_at timestamptz not null default now()
);
create index if not exists expenses_user_idx on expenses (user_id);

create table if not exists cards (
  id text primary key,
  user_id text not null,
  name text not null,
  limit_cents integer not null,
  due_day integer not null,
  tone text not null default 'ink',
  created_at timestamptz not null default now()
);
create index if not exists cards_user_idx on cards (user_id);

create table if not exists purchases (
  id text primary key,
  user_id text not null,
  card_id text not null,
  description text not null,
  category text not null,
  merchant text,
  total_cents integer not null,
  installments integer not null default 1,
  installment_cents integer not null,
  year integer not null,
  month integer not null,
  day integer,
  created_at timestamptz not null default now()
);
create index if not exists purchases_user_idx on purchases (user_id);

create table if not exists goals (
  id text primary key,
  user_id text not null,
  name text not null,
  target_cents integer not null,
  saved_cents integer not null default 0,
  year integer not null,
  month integer not null,
  done boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists goals_user_idx on goals (user_id);

create table if not exists budgets (
  id text primary key,
  user_id text not null,
  category text not null,
  limit_cents integer not null,
  unique (user_id, category)
);
create index if not exists budgets_user_idx on budgets (user_id);
