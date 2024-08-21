<script setup lang="ts">
import { defineProps } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';

const props = defineProps({
  orders: Array,
});
</script>

<template>
  <div id="listPageDataTable">
    <DataTable
      :value="props.orders"
      paginator
      :rows="10"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
    >
      <Column field="quoteref" header="Reference"></Column>
      <Column field="customername" header="Customer"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="workdescription" header="Description"></Column>
      <Column field="updated_at" header="Updated"></Column>
    </DataTable>
  </div>
</template>

// TODO: Next find a way to get orders passed into this
