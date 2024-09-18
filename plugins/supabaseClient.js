require('dotenv').config();

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseKey);

// this file currently unused.... probably should be deleted.
