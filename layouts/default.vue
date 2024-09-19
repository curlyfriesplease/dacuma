<script setup>
import Toolbar from '~/src/components/Toolbar.vue';
import '~/assets/css/global.css';
</script>

<template>
  <div>
    <Toolbar />
    <div id="defaultLayoutContentSlot">
      <slot />
    </div>
  </div>
</template>

<style>
#defaultLayoutContentSlot {
  padding: 3rem 3rem 1rem 3rem;
  width: 100%;
  height: auto;
  border: 2rem;
}
</style>
