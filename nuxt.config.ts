import { defineNuxtConfig } from 'nuxt/config'

const lifecycle = process.env.npm_lifecycle_event
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  build: {
    transpile: lifecycle === 'build' ? ['element-plus'] : [],
  },
  experimental: {
    reactivityTransform: true
    // viteNode: true,
  },
  vueuse: {
    ssrHandlers: true
  },
  colorMode: {
    classSuffix: ''
  },
  components: true,
})
