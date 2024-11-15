import { supabaseClient } from './supabaseClient';

export const fetchOrderById = async (id) => {
  const { data, error } = await supabaseClient
    .from('jobs')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }

  return data;
};
