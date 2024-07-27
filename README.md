![Dacuma logo](public/dacuma2_transparentBg.png)

# Dacuma

A customer management app, for tracking job progress and emailing progress updates.

## Setup

1. Sign up for a Supabase DB
2. Within Supabase, create your user from the Authentication tab
3. A .env file is required in the project root with the following added:\
   SUPABASE_URL=abcdefghijklmnopqrstuv\
   SUPABASE_KEY=abcdefghijklmnopqrstuv\
   (or, if deploying, add as env vars to the platform)

## Troubleshooting

# Failed to fetch at login screen

Is it the case that you haven't used your Supabase DB in a while? It will have stopped, and we need waking up from the supabase site.
