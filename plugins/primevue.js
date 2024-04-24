import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('Toolbar', Toolbar);
});
