<script setup lang="ts">
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
        <Button label="Dashboard" plain text />
        <Button label="List" text />
        <Button label="Active" text />
        <Button label="History" plain text />
        <Button label="Settings" plain text />
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
.logoutButtonContainer {
  margin-right: 30px;
}
</style>
