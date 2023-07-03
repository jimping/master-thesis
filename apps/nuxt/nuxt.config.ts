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
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  routeRules: {
    '/client-components/10/ssr': { ssr: true },
    '/client-components/10/ssg': { prerender: true },
    '/client-components/10/isr': { swr: 5 }, // SWR = ISR (revalidates in background)
    '/client-components/250/ssr': { ssr: true },
    '/client-components/250/ssg': { prerender: true },
    '/client-components/250/isr': { swr: 5 }, // SWR = ISR (revalidates in background)
    '/client-components/1000/ssr': { ssr: true },
    '/client-components/1000/ssg': { prerender: true },
    '/client-components/1000/isr': { swr: 5 }, // SWR = ISR (revalidates in background)

    '/server-components/10/ssr': { ssr: true },
    '/server-components/10/ssg': { prerender: true },
    '/server-components/10/isr': { swr: 5 }, // SWR = ISR (revalidates in background)
    '/server-components/250/ssr': { ssr: true },
    '/server-components/250/ssg': { prerender: true },
    '/server-components/250/isr': { swr: 5 }, // SWR = ISR (revalidates in background)
    '/server-components/1000/ssr': { ssr: true },
    '/server-components/1000/ssg': { prerender: true },
    '/server-components/1000/isr': { swr: 5 } // SWR = ISR (revalidates in background)
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
