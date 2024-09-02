import { supabase } from '~/plugins/supabaseClient';

export const getListData = async () => {
  console.log('getListData called');
  // const { data, error } = await supabase.from('jobs').select('*');
  // if (error) throw error;

  const { data, error } = await useAsyncData('jobs', async () => {
    const { data } = await supabase.from('jobs').select('*');
    console.log('✅ data', data);
    return data;
  });
  if (error) throw error;
  return data;
};
