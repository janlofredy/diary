// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/supabase',
    '@element-plus/nuxt',
    '@nuxt/icon'
  ],
  pwa: {

  }
});