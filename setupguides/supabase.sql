-- Create a table for public profiles
create table jobs (
  id uuid references auth.users not null,
  jobid uuid not null primary key,
  quoteref text,
  jobisopen boolean,
  customername text,
  customeremail text,
  customerphone text,
  itemdescription text,
  workdescription text,
  category text,
  quotedprice numeric,
  partscost numeric,
  finalprice numeric,
  notes text,
  timeestimate decimal,
  totaltime decimal,
  flagred boolean,
  flagyellow boolean,
  flaggreen boolean,
  status numeric,
  includeinstats boolean,
  status1timestamp timestamp with time zone,
  status2timestamp timestamp with time zone,
  status3timestamp timestamp with time zone,
  status4timestamp timestamp with time zone,
  status5timestamp timestamp with time zone,
  status6timestamp timestamp with time zone,
  status7timestamp timestamp with time zone,
  updated_at timestamp with time zone
);

create table changeslog (
  id uuid references auth.users not null primary key,
  changetimestamp timestamp with time zone,
  jobid uuid references jobs,
  status numeric,
  description text
);

-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/database/postgres/row-level-security for more details.
alter table jobs
  enable row level security;
create policy "Jobs are viewable only by authenticated users"
on jobs for select
to authenticated
using ( true );

create policy "Users can insert their own jobs." on jobs
  for insert with check ((select auth.uid()) = id);

create policy "Users can update own jobs." on jobs
  for update using ((select auth.uid()) = id);

  -- Enable Row Level Security (RLS) on the changeslog table
alter table changeslog
  enable row level security;

create policy "Changes are viewable only by authenticated users"
on changeslog for select
using ((select auth.uid()) = id);

create policy "Users can insert their own changes." on changeslog
  for insert with check ((select auth.uid()) = id);

create policy "Users can update own changes." on changeslog
  for update using ((select auth.uid()) = id);
