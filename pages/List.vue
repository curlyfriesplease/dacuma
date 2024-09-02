<script>
definePageMeta({
  middleware: 'auth',
});

import '~/assets/css/global.css';
import { getListData } from '~/services/getList';

const allJobs = ref([]);
console.log('🔥 allJobs:', allJobs);

onMounted(async () => {
  try {
    console.log('🕗 Fetching all jobs...');
    allJobs.value = await getListData();
  } catch (error) {
    console.error('🤢 Error fetching all jobs:', error);
  }
});
</script>

<template>
  <div id="listPageContentContainer">
    List page
    <pre>{{ allJobs }}</pre>
  </div>
</template>
