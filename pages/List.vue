<script setup>
import { ref, onMounted, computed } from 'vue';
import '~/assets/css/global.css';
import { getListData } from '~/services/getList';
import Loading from '~/src/components/Loading.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

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

const getFlagIcons = computed(() => (job) => {
  const icons = [];
  if (job.flagred)
    icons.push('<i class="pi pi-flag-fill" style="color: red"></i>');
  if (job.flagyellow)
    icons.push('<i class="pi pi-flag-fill" style="color: yellow"></i>');
  if (job.flaggreen)
    icons.push('<i class="pi pi-flag-fill" style="color: green"></i>');
  return icons.join(' ');
});
</script>

<template>
  <div id="listPageContentContainer">
    <Loading v-if="isLoading" message="Loading jobs..." />
    <DataTable
      v-else
      :value="allJobs"
      sortField="quoteref"
      :sortOrder="-1"
      tableStyle="min-width: 50rem"
    >
      <Column field="quoteref" header="Ref" sortable></Column>
      <Column field="customername" header="Customer" sortable></Column>
      <Column field="category" header="Category" sortable></Column>
      <Column field="itemdescription" header="Item" sortable></Column>
      <Column field="workdescription" header="Service" sortable></Column>
      <Column header="Flags">
        <template #body="slotProps">
          <span v-html="getFlagIcons(slotProps.data)"></span>
        </template>
      </Column>
    </DataTable>
    <pre>{{ allJobs }}</pre>
  </div>
</template>
