<script setup>
import { ref, onMounted } from 'vue';
import '~/assets/css/global.css';
import { getListData } from '~/services/getList';
import Loading from '~/src/components/Loading.vue';

definePageMeta({
  middleware: 'auth',
});

const allJobs = ref([]);
const isLoading = ref(true);
console.log('🔥 allJobs:', allJobs);

onMounted(async () => {
  try {
    console.log('🕗 Fetching all jobs...');
    allJobs.value = await getListData();
  } catch (error) {
    console.error('🤢 Error fetching all jobs:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div id="listPageContentContainer">
    List page
    <Loading v-if="isLoading" message="Loading jobs..." />
    <pre v-else>{{ allJobs }}</pre>
  </div>
</template>
