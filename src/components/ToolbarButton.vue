<script setup lang="ts">
const props = defineProps({
  to: String,
  activeClass: String,
});
</script>

<template>
  <NuxtLink :to="to" class="buttonClass" :active-class="activeClass">
    <slot></slot>
  </NuxtLink>
</template>

<style scoped>
.buttonClass {
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

.logoutButtonContainer {
  margin-right: 30px;
}
.active-link {
  color: rgb(52, 211, 153);
}
</style>
