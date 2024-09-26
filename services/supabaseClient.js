import { createClient } from '@supabase/supabase-js';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  throw new Error('Supabase URL and Key must be provided in environment variables');
}

export const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
