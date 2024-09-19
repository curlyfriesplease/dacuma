<script setup>
import { ref, onMounted, computed } from 'vue';
import '~/assets/css/global.css';
import { getListData } from '~/services/getList';
import Loading from '~/src/components/Loading.vue';
import ListTable from '~/src/components/list/ListTable.vue';

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
    <div v-if="isLoading" id="listPageLoadingContainer">
      <Loading message="Loading jobs..." />
    </div>

    <ListTable v-else :orders="allJobs" />
  </div>
</template>

<style scoped>
#listPageLoadingContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}
</style>
