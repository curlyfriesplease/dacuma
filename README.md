![Dacuma logo](public/dacuma2_transparentBg.png)

# Dacuma

A customer management app, for tracking job progress and emailing progress updates.
**_ THIS IS CURRENTLY A WIP AND NOT YET READY AS AN MVP _**

## Setup

1. Sign up for a Supabase DB
2. Within Supabase, create your user from the Authentication tab
3. Within Supabase, some initial SQL will need to be run to setup the DB schema. Copy and run the contents of the file /setupguides/supabase.sql
4. A .env file is required in the project root with the following added:\
   SUPABASE_URL=abcdefghijklmnopqrstuv\
   SUPABASE_KEY=abcdefghijklmnopqrstuv\
   (or, if deploying, add as env vars to the platform)

## Running locally

Use `npm run dev` to start the app

## Troubleshooting

# Failed to fetch at login screen

Is it the case that you haven't used your Supabase DB in a while? It will have stopped, and we need waking up from the supabase site.
