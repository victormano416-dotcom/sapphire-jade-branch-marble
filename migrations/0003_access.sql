create table if not exists account_access (
  user_id text primary key references "user" ("id") on delete cascade,
  status text not null default 'pending',
  updated_at timestamptz not null default now(),
  constraint account_access_status_chk check (status in ('pending', 'approved', 'blocked'))
);
