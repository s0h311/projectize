export default defineNuxtConfig({
  app: {
    head: {
      title: 'Projectize your ideas',
      link: [{ rel: 'icon', type: 'image/png', href: '/logo_p.png' }]
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
    dir: 'assets/static'
  }
})
