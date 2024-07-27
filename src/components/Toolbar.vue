<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import ToolbarButton from './ToolbarButton.vue';

const client = useSupabaseClient();
const router = useRouter();

async function logout() {
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;

    router.push('/Login');
  } catch (error) {
    console.error('Sign out error', error);
  }
}
</script>

<template>
  <Toolbar style="border-radius: 3rem; padding: 1rem 2rem 1rem 3rem">
    <template #start>
      <img src="/dacuma2_transparentBg.png" alt="logo" style="height: 2rem" />
    </template>

    <template #center>
      <div class="flex flex-row align-items-center gap-2">
        <ToolbarButton to="/Dashboard" active-class="active-link"
          >Dashboard</ToolbarButton
        >
        <ToolbarButton to="/List" active-class="active-link"
          >List</ToolbarButton
        >
        <ToolbarButton to="/Active" active-class="active-link"
          >Active</ToolbarButton
        >
        <ToolbarButton to="/History" active-class="active-link"
          >History</ToolbarButton
        >
        <ToolbarButton to="/Settings" active-class="active-link"
          >Settings</ToolbarButton
        >
      </div>
    </template>

    <template #end>
      <div class="gap-2 w-24" id="logoutButtonContainer">
        <Button label="Logout" @click="logout" text size="small" />
      </div>
    </template>
  </Toolbar>
</template>

<style scoped>
#logoutButtonContainer {
  margin-right: 30px;
}
</style>
