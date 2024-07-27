<script setup lang="ts">
import '~/assets/css/global.css';

const client = useSupabaseClient();
const router = useRouter();
const email = ref('');
const password = ref('');
const errorMsg = ref('');

async function signIn() {
  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push('/Dashboard');
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>

<template>
  <div class="h-screen flex">
    <div class="flex-1 flex items-center justify-center bg-gray-900">
      <form
        @submit.prevent="signIn"
        class="flex flex-col bg-gray-600 p-8 rounded-lg shadow-lg w-96 space-y-4"
      >
        <div class="flex justify-between">
          <label for="email">Email</label>
          <input id="email" v-model="email" type="email" required />
        </div>
        <div class="flex justify-between">
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password" required />
        </div>
        <button type="submit">Login</button>
        <h1 v-if="errorMsg" class="text-red-500">{{ errorMsg }}</h1>
      </form>
    </div>
  </div>
</template>
