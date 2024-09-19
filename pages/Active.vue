<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

import '~/assets/css/global.css';
const activeCustomer = useState('activeCustomer');
</script>

<template>
  <div id="activePageContentContainer">
    <pre>{{ activeCustomer }}</pre>
  </div>
</template>
