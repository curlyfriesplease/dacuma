import { navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser();
  if (!user.value) {
    console.log('☢️ User not found, redirecting to login');
    return navigateTo('/login');
  }
});
