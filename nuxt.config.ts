// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', 'nuxt-primevue'],
  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: true,
      inputStyle: 'filled'
  },
  components: {
    include: ['Toolbar']
}
}
});
