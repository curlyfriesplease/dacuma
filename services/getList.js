import { supabaseClient } from './supabaseClient';

export const getListData = async () => {
  console.log('getListData called');
  const { data, error } = await supabaseClient.from('jobs').select('*');
  if (error) throw error;
  return data;
};
