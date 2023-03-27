export default defineNuxtConfig({
  app: {
    head: {
      title: 'Campus Dash',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/image-edge'
  ],
  css: [
    '@/assets/css/main.css'
  ],
  typescript: {
    typeCheck: true
  },
  image: {
    presets: {
      project : {
        modifiers: {
          width: 400,
          height: 200
        }
      }
    },
    dir: 'assets/test-images'
  }
})
