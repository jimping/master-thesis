import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    componentIslands: true
  },

  nitro: {
    compressPublicAssets: true
  },

  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com'
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: 'https://player.vimeo.com/api/player.js' }
      ]
    }
  },

  routeRules: {
    '/client-components/ssr': { ssr: true },
    '/client-components/ssg': { prerender: true },
    '/client-components/isr': { swr: 5 }, // SWR = ISR (revalidates in background)
    '/client-components/csr': { ssr: false },

    '/server-components/ssr': { ssr: true },
    '/server-components/ssg': { prerender: true },
    '/server-components/isr': { swr: 5 }, // SWR = ISR (revalidates in background)
    '/server-components/csr': { ssr: false }
  },

  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  image: {
    domains: [
      'images.unsplash.com'
    ],

    alias: {
      unsplash: 'https://images.unsplash.com'
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/app.pcss',
    viewer: false
  }
})
