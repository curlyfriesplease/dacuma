<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import type { Customer } from '~/src/types/typeroonies';
import getStatus from '~/src/utils/statuses';
import { createJob } from '../../../services/createJob';
import { updateJob } from '../../../services/updateJob';

const props = defineProps<{
  initialData?: Partial<Customer>;
}>();

const emit = defineEmits<{
  (e: 'submit', data: Customer): void;
  (e: 'error', message: string): void;
}>();

const formData = ref<Partial<Customer>>({
  jobid: '',
  quoteref: '',
  customername: '',
  customeremail: '',
  customerphone: '',
  itemdescription: '',
  workdescription: '',
  category: '',
  quotedprice: null,
  partscost: null,
  finalprice: null,
  notes: '',
  timeestimate: null,
  totaltime: null,
  flagred: false,
  flagyellow: false,
  flaggreen: false,
  status: 1,
  includeinstats: false,
});

const statusOptions = ref(
  Array.from({ length: 7 }, (_, i) => getStatus(i + 1)).filter(Boolean)
);

const error = ref<string | null>(null); // TODO: Replace with actual error object

onMounted(() => {
  if (props.initialData) {
    formData.value = { ...formData.value, ...props.initialData };
  }
});

watch(
  () => props.initialData,
  (newValue) => {
    if (newValue) {
      formData.value = { ...formData.value, ...newValue };
    }
  },
  { immediate: true }
);

const handleSubmit = async () => {
  try {
    error.value = ''; // Clear any previous errors
    let result;
    if (formData.value.jobid) {
      result = await updateJob(formData.value as Customer);
    } else {
      result = await createJob(formData.value as Customer);
    }
    emit('submit', result);
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : 'An unknown error occurred';
    emit('error', error.value);
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="job-details-form">
    <div class="form-group">
      <label for="quoteref">Reference</label>
      <input id="quoteref" v-model="formData.quoteref" type="text" />
    </div>

    <div class="form-group">
      <label for="customername">Customer Name</label>
      <input
        id="customername"
        v-model="formData.customername"
        type="text"
        required
      />
    </div>

    <div class="form-group">
      <label for="customeremail">Customer Email</label>
      <input id="customeremail" v-model="formData.customeremail" type="email" />
    </div>

    <div class="form-group">
      <label for="customerphone">Customer Phone</label>
      <input id="customerphone" v-model="formData.customerphone" type="tel" />
    </div>

    <div class="form-group">
      <label for="itemdescription">Item Description</label>
      <textarea
        id="itemdescription"
        v-model="formData.itemdescription"
      ></textarea>
    </div>

    <div class="form-group">
      <label for="workdescription">Work Description</label>
      <textarea
        id="workdescription"
        v-model="formData.workdescription"
      ></textarea>
    </div>

    <div class="form-group">
      <label for="category">Category</label>
      <input id="category" v-model="formData.category" type="text" />
    </div>

    <div class="form-group">
      <label for="quotedprice">Quoted Price</label>
      <input
        id="quotedprice"
        v-model.number="formData.quotedprice"
        type="number"
        step="0.01"
      />
    </div>

    <div class="form-group">
      <label for="partscost">Parts Cost</label>
      <input
        id="partscost"
        v-model.number="formData.partscost"
        type="number"
        step="0.01"
      />
    </div>

    <div class="form-group">
      <label for="finalprice">Final Price</label>
      <input
        id="finalprice"
        v-model.number="formData.finalprice"
        type="number"
        step="0.01"
      />
    </div>

    <div class="form-group">
      <label for="notes">Notes</label>
      <textarea id="notes" v-model="formData.notes"></textarea>
    </div>

    <div class="form-group">
      <label for="timeestimate">Time Estimate</label>
      <input
        id="timeestimate"
        v-model.number="formData.timeestimate"
        type="number"
        step="0.1"
      />
    </div>

    <div class="form-group">
      <label for="totaltime">Total Time</label>
      <input
        id="totaltime"
        v-model.number="formData.totaltime"
        type="number"
        step="0.1"
      />
    </div>

    <div class="form-group">
      <label>Flags</label>
      <div>
        <label>
          <input type="checkbox" v-model="formData.flagred" /> Red
        </label>
        <label>
          <input type="checkbox" v-model="formData.flagyellow" /> Yellow
        </label>
        <label>
          <input type="checkbox" v-model="formData.flaggreen" /> Green
        </label>
      </div>
    </div>

    <div class="form-group">
      <label>
        <input type="checkbox" v-model="formData.includeinstats" /> Include in
        Stats
      </label>
    </div>

    <div class="form-group">
      <label for="status">Status</label>
      <select id="status" v-model.number="formData.status">
        <option
          v-for="status in statusOptions"
          :key="status?.id"
          :value="status?.id"
        >
          {{ status?.name }}
        </option>
      </select>
    </div>

    <button type="submit">
      {{ formData.jobid ? 'Update Job' : 'Create Job' }}
    </button>

    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <div v-if="formData.jobid" class="job-id-display">
      <label>Job ID:</label>
      <span>{{ formData.jobid }}</span>
    </div>
  </form>
</template>

<style scoped>
.job-details-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.job-id-display {
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  color: #666;
  font-style: italic;
  text-align: center;
}

.job-id-display label {
  margin-right: 0.5rem;
}

.error-message {
  color: red;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.5rem;
}

input,
textarea,
select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
