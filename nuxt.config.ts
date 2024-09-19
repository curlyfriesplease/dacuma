// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', 'nuxt-primevue'],
  css: [
    'primevue/resources/themes/lara-dark-green/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '~/assets/css/tailwind.css',
    '~/assets/css/global.css',
  ],
  build: {
    transpile: ['nuxt', 'primevue'],
  },
  primevue: {
    usePrimeVue: true,
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    options: {
      inputStyle: 'filled',
    },
    components: {
      include: ['Toolbar', 'Button'],
    },
  },
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
});
