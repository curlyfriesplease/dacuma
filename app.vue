<script setup>
const user = useSupabaseUser();
import 'primevue/resources/themes/lara-dark-green/theme.css'
</script>

<template>
  <div class="container" id='mainContainer'>
    <NuxtPage reg="Main" v-if="user" />
    <NuxtPage reg="Login" v-else />
  </div>
</template>

<style>
#mainContainer {
  padding: 25px 0 20px 0;
  width: 100vw;
  height: 100vh;
}
</style>