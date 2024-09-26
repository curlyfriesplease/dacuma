import { supabaseClient } from './supabaseClient';

export const createJob = async (jobData) => {
  const { data, error } = await supabaseClient.from('jobs').insert(jobData);

  if (error) {
    throw error;
  }

  return data;
};
