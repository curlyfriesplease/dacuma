<script setup lang="ts">
import { defineProps } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import getStatus from '../../utils/statuses';

const props = defineProps({
  orders: Array,
});

const getFlagIcons = computed(
  () =>
    (job: { flagred?: boolean; flagyellow?: boolean; flaggreen?: boolean }) => {
      const icons = [];
      if (job.flagred)
        icons.push('<i class="pi pi-flag-fill" style="color: red"></i>');
      if (job.flagyellow)
        icons.push('<i class="pi pi-flag-fill" style="color: yellow"></i>');
      if (job.flaggreen)
        icons.push('<i class="pi pi-flag-fill" style="color: green"></i>');
      return icons.join(' ');
    }
);
</script>

<template>
  <div id="listPageDataTable">
    <DataTable
      :value="props.orders"
      sortField="quoteref"
      :sortOrder="-1"
      tableStyle="min-width: 50rem"
      paginator
      :rows="25"
    >
      <Column field="quoteref" header="Ref" sortable></Column>
      <Column header="Status" sortable>
        <template #body="slotProps">
          <Tag
            :value="getStatus(slotProps.data.status)?.name ?? 'Unknown'"
            :severity="getStatus(slotProps.data.status)?.severity ?? 'Warn'"
          />
        </template>
      </Column>
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
  </div>
</template>

// TODO: Next find a way to get orders passed into this
