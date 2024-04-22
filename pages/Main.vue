<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

import '~/assets/global.css'
import Toolbar from '../src/components/Toolbar.vue';

const user = useSupabaseUser();

</script>

<template>
  <Toolbar />

  <h1>MAIN PAGE</h1>

</template>
