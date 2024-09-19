<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

import '~/assets/css/global.css';
const activeCustomer = useState('activeCustomer');
</script>

<template>
  <div id="activePageContentContainer">Active page</div>
  <pre>{{ activeCustomer }}</pre>
</template>
