<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';

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
<Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
    <template #start>
        <div class="flex align-items-center gap-2">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="var(--text-color)" />
                <path d="..." fill="var(--surface-card)" />
            </svg>
            <Button label="Files" text plain />
            <Button label="Edit" text plain />
            <Button label="View" text plain />
        </div>
    </template>

    <template #end>
        <div class="flex align-items-center gap-2">
            <Button label="Logout" @click="logout" severity="contrast" size="small" />
        </div>
    </template>
</Toolbar>
</template>
