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
      paginator
      :alwaysShowPaginator="false"
      :rows="25"
      selectionMode="single"
      rowHover
      removableSort
      class="rounded-table"
    >
      <Column field="quoteref" header="Ref" sortable></Column>
      <Column header="Status" sortable>
        <template #body="slotProps">
          <Tag
            :value="getStatus(slotProps.data.status)?.name ?? 'Unknown'"
            :class="[
              'custom-severity',
              `severity-${
                getStatus(slotProps.data.status)?.severity.toLowerCase() ??
                'warn'
              }`,
            ]"
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

<style scoped>
.rounded-table {
  border-radius: 15px;
  overflow: hidden;
}

.custom-severity {
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.3px;
}

.severity-info {
  background-color: #add6ff;
  color: #2d3748;
}

.severity-progress {
  background-color: #92d489;
  color: #0f141d;
}

.severity-warn {
  background-color: #fefcbf;
  color: #744210;
}

.severity-success {
  background-color: #e797e3;
  color: #163326;
}

.severity-danger {
  background-color: #fed7d7;
  color: #822727;
}
</style>
