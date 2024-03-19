const isDev = process.env.NODE_ENV === "development";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,

  devtools: { enabled: true },

  experimental: {
    viewTransition: true,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    '@nuxt/test-utils/module'
  ],

  routeRules: {
    // "/**": isDev
    //   ? {}
    //   : {
    //       // isr: 60,
    //       cache: {
    //         swr: true,
    //         maxAge: 120,
    //         staleMaxAge: 60,
    //         headersOnly: true,
    //       },
    //     },
    // "/": isDev
    //   ? {}
    //   : {
    //       prerender: true,
    //     },
    // "/api/*": isDev
    //   ? {}
    //   : {
    //       cache: { maxAge: 60 * 60 },
    //     },
  },

  nitro: {
    static: !isDev,
    // preset: 'github_pages'
    // prerender: {
    //   crawlLinks: true,
    //   routes: ["/sitemap.xml", "/robots.txt"],
    // },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    baseURL: '/tip-calculator-web/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    head: {
      title: "Splitter",
      htmlAttrs: { lang: "en" },
      meta: [
        // SEO meta tags
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "keywords", content: "" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "description",
          content: "",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          type: "image/svg+xml",
          href: "/logo.svg",
        },
      ],
    },
  },

  image: {
    format: ["webp"],
  },

  css: ["~/assets/styles/main.scss"],

  components: true,

  tailwindcss: {
    cssPath: "~/assets/styles/tailwind.scss",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: "first",
    viewer: true,
  },

  googleFonts: {
    families: {
      "Space+Mono": [700],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
    preload: true,
  },

  nuxtIcon: {
    size: "24px", // default <Icon> size applied
    class: "icon", // default <Icon> class applied
    aliases: {
      // 'nuxt': 'logos:nuxt-icon',
    },
  },
});
