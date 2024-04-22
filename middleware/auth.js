import { navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware(() => {
  console.log('Middleware auth.js');
  const user = useSupabaseUser();
  if (!user.value) {
    return navigateTo('/login');
  }
});
