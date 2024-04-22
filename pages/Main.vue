<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});
const user = useSupabaseUser();
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
  <h1>I'm logged in</h1>
  <button @click="logout" type="button" class="self-start btn mt-6">
    Logout
  </button>
</template>
