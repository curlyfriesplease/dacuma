<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

import '~/assets/css/global.css';
</script>

<template>
  <div id="mainPageContentContainer">Settings page</div>
</template>

<style>
#mainPageContentContainer {
  padding: 3rem 3rem 1rem 3rem;
  background-color: rgba(0, 255, 255, 0.261);
  width: 100%;
  height: auto;
  border: 2rem;
}
</style>
