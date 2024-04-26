<script setup>
import Toolbar from '~/src/components/Toolbar.vue';
import '~/assets/css/global.css';
</script>

<template>
  <div>
    <Toolbar />
    <slot />
  </div>
</template>
