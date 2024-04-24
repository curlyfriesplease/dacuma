<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

import '~/assets/css/global.css'
import Toolbar from '../src/components/Toolbar.vue';

</script>

<template>
  <Toolbar />

  <h1>MAIN PAGE</h1>

</template>
