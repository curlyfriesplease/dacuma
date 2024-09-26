<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

import type { Customer } from '~/src/types/typeroonies';
import '~/assets/css/global.css';
import JobDetailRow from '~/src/components/active/JobDetailRow.vue';
import { ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import JobDetailsForm from '../src/components/common/jobDetailsForm.vue';

const activeCustomer = useState<Customer>('activeCustomer');
const editDialogVisible = ref(false);

const openEditDialog = () => {
  editDialogVisible.value = true;
};
</script>

<template>
  <div id="activePageContentContainer">
    <div v-if="activeCustomer">
      <JobDetailRow property="Reference" :data="activeCustomer.quoteref" />
      <JobDetailRow property="Name" :data="activeCustomer.customername" />

      <JobDetailRow property="Item" :data="activeCustomer.itemdescription" />
      <JobDetailRow property="Work" :data="activeCustomer.workdescription" />
      <JobDetailRow property="Category" :data="activeCustomer.category" />

      <JobDetailRow
        property="Client Email"
        :data="activeCustomer.customeremail"
      />
      <JobDetailRow
        property="Client Phone"
        :data="activeCustomer.customerphone"
      />
      <JobDetailRow
        property="Quoted Price"
        :data="activeCustomer.quotedprice"
      />
      <JobDetailRow property="Parts Cost" :data="activeCustomer.partscost" />
      <JobDetailRow property="Final Price" :data="activeCustomer.finalprice" />
      <JobDetailRow property="Notes" :data="activeCustomer.notes" />
      <JobDetailRow
        property="Time Estimate"
        :data="activeCustomer.timeestimate"
      />
      <JobDetailRow property="Total Time" :data="activeCustomer.totaltime" />
      <JobDetailRow property="Updated At" :data="activeCustomer.updated_at" />
      <Button label="Edit" icon="pi pi-pencil" @click="openEditDialog" />
      <Dialog
        v-model:visible="editDialogVisible"
        header="Edit Job Details"
        :style="{ width: '50vw' }"
      >
        <JobDetailsForm :initialData="activeCustomer" />
      </Dialog>
    </div>
    <div v-else>
      <p>No active customer selected.</p>
    </div>
  </div>
</template>
