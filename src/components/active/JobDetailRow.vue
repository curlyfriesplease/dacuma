<template>
  <div class="job-detail-row">
    <div class="property">{{ property }}</div>
    <div class="data">{{ data || '-' }}</div>
  </div>
</template>

<script>
export default {
  name: 'JobDetailRow',
  props: {
    property: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.job-detail-row {
  display: flex;
  width: 100%;
}

.property {
  width: 25%;
  text-align: right;
  padding: 0.5rem;
  padding-right: 1rem;
  font-weight: bold;
}

.data {
  width: 75%;
  text-align: left;
  padding: 0.5rem;
  padding-left: 1rem;
  font-weight: normal;
}
</style>
