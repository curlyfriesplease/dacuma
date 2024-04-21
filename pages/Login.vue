<script setup lang="ts">
const client = useSupabaseClient();
const router = useRouter();
const email = ref('');
const password = ref(null);
const errorMsg = ref(null);

async function signIn() {
  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push('/Main');
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>

<template>
  <div class="h-screen flex">
    <div class="flex-1 flex items-center justify-center bg-gray-100">
      <h1>Login</h1>
      <form
        @submit.prevent="signIn"
        class="flex flex-col bg-white p-8 rounded-lg shadow-lg w-96 space-y-4"
      >
        <div>
          <label for="email">Email</label>
          <input id="email" v-model="email" type="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <h1 v-if="errorMsg" class="text-red-500">{{ errorMsg }}</h1>
    </div>
  </div>
</template>
