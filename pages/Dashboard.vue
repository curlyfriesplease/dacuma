<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

import '~/assets/css/global.css';
import Toolbar from '../src/components/Toolbar.vue';
</script>

<template>
  <div id="dashboardPageContentContainer">
    <Joblist />
  </div>
</template>
