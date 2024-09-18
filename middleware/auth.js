import { navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser();
  console.group('🔒 Auth middleware');
  console.log('Auth middleware called');
  console.log('user', user);
  console.groupEnd();
  if (!user.value) {
    console.log('☢️ User not found, redirecting to login');
    return navigateTo('/login');
  }
});
