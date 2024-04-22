<script setup>
const user = useSupabaseUser();
import 'primevue/resources/themes/lara-light-green/theme.css'
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <NuxtPage reg="Main" v-if="user" />
    <NuxtPage reg="Login" v-else />
  </div>
</template>
