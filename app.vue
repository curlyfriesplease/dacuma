<script setup>
const user = useSupabaseUser();
import 'primevue/resources/themes/lara-dark-green/theme.css';
</script>

<template>
  <div class="container" id="mainContainer">
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage reg="Dashboard" v-if="user" />
      <NuxtPage reg="Login" v-else />
    </NuxtLayout>
  </div>
</template>

<style>
#mainContainer {
  padding: 25px 0 20px 0;
  width: 100vw;
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
