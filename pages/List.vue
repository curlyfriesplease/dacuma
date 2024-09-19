<script setup>
import { useAsyncData, useRoute } from '#app';
import '~/assets/css/global.css';
import { getListData } from '~/services/getList';
import Loading from '~/src/components/Loading.vue';
import ListTable from '~/src/components/list/ListTable.vue';

definePageMeta({
  middleware: 'auth',
});
const route = useRoute();

const {
  data: allJobs,
  pending: isLoading,
  refresh,
} = await useAsyncData(
  'jobs',
  async () => {
    console.log('🕗 Fetching all jobs...');
    try {
      return await getListData();
    } catch (error) {
      console.error('🤢 Error fetching all jobs:', error);
      return [];
    }
  },
  {
    watch: [() => route.fullPath],
  }
);

// TODO: Add refresh button
// Function to manually refresh data
// const refreshJobs = () => {
//   refresh();
// };
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
