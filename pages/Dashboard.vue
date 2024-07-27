<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

import '~/assets/css/global.css';
import Toolbar from '../src/components/Toolbar.vue';
</script>

<template>
  <Toolbar />

  <div id="mainPageContentContainer">Dashboard page</div>

  <template>
    <div id="mainPageContentContainer">
      <Joblist />
    </div>
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
</template>
