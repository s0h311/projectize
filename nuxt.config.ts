export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  css: [
    '@/assets/css/main.css'
  ],
  typescript: {
    typeCheck: true
  }
})
