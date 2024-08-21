<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

import '~/assets/css/global.css';
</script>

<template>
  <div id="activePageContentContainer">Active page</div>
</template>
