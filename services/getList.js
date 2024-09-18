// import * as supabaseClient from '../plugins/supabaseClient';
export const getListData = async () => {
  const supabaseClient = useSupabaseClient();
  console.log('getListData called');
  const { data, error } = await supabaseClient.from('jobs').select('*');
  if (error) throw error;
  return data;
};
