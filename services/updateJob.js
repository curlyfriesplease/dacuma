import { supabaseClient } from './supabaseClient';

export const updateJob = async (id, updatedData) => {
  const { data, error } = await supabaseClient
    .from('jobs')
    .update(updatedData)
    .eq('id', id);

  if (error) {
    throw error;
  }

  return data;
};
